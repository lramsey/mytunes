// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    //var songQueue = new SongQueue();
    //songQueue.fetch();
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    params.library.on('play', function(song){
      this.set('currentSong', song);
      this.trigger('changeCurrentSong');
    }, this);

    params.library.on('enqueue', function(song){
      var sq = this.get('songQueue');
      var songClone = _.clone(song);
      if (sq.models.length === 0){
        songClone.play();
      }
      sq.models.push(songClone);
      //songClone.save();
      this.trigger('songAdded');
    }, this);

    params.library.on('dequeue', function(song){
      var sq = this.get('songQueue');

      _.each(sq.models, function(songElement, index){
        if (songElement === song){
          sq.models.splice(index, 1);
          // if currently playing song is clicked
          if(index === 0){
            this.trigger('stop');
            if(sq.models.length > 0){
              sq.models[0].play();
            }
          }
        }
      }, this);

    }, this);
  }
});