// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('changeCurrentSong', function(){
      this.playerView.setSong(this.model.get('currentSong'));
    }, this);
  },

  render: function(){
    $('.player').append(this.playerView.$el);
    $('.playlist').append(this.songQueueView.$el);
    $('.library').append(this.libraryView.$el);
    return this.$el.html();
  }

});
