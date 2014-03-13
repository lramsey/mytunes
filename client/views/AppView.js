// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('changeCurrentSong', function(){
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);

    this.model.on('songAdded', function(){
      var sq = this.model.get('songQueue');
      var song = sq.models[sq.models.length-1];
      this.songQueueView.addSong(song);
    }, this);

    this.model.on('stop', function(){
      this.playerView.stopPlay();
    }, this);

    this.playerView.on('nextSong', function(model){
      var sq = this.model.get('songQueue');
      sq.models.shift();
      if(sq.models.length > 0){
        sq.models[0].play();
      }
      this.songQueueView.removeSongQueueEntry();
    }, this);

  },

  render: function(){
    $('.player').append(this.playerView.$el);
    $('.playlist').append(this.songQueueView.$el);
    $('.library').append(this.libraryView.$el);
    return this.$el.html();
  }

});
