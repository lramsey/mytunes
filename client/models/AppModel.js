// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());

    var data = JSON.parse(window.localStorage.getItem('playlist'));
    var obj = {};
    _.each(params.library.models, function(song, index){
      obj[song.attributes.url] = index;
    });

    libModels =_.map(data, function(songData){
      var index = obj[songData.url];
      var song = params.library.at(index);
      return song;
    });
    this.set('songQueue', new SongQueue());
    this.get('songQueue').models = libModels;
    if(this.get('songQueue').models.length > 0){
      var song = this.get('songQueue').at(0);
      this.set('currentSong', song);
      this.trigger('changeCurrentSong');
    }

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
      this.get('songQueue').add(song);
    }, this);
  }
});