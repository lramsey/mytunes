// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    //params are appmodel   this.model = appModel
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    //passing Songs collection to libraryView through appmodel
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:songQueue', function(model){
      var sq = model.get('songQueue');
      var song = sq.models[sq.models.length-1];
      console.log('Song', song);
      this.songQueueView.addSong(song);
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.songQueueView.$el,
      this.libraryView.$el
    ]);
  }

});
