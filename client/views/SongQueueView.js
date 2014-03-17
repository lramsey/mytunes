// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', 'remove', this.render(), this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Playlist</th>');
    this.showPlaylist();
  },

  showPlaylist: function(){
    _.each(this.collection.models, function(song){
      this.addSong(song);
    }, this);
  },

  addSong: function(song) {
    this.$el.append( new SongQueueEntryView({model: song}).render() );
  },

  removeSongQueueEntry: function() {
    this.$el.find('tr').first().detach();
  }


});
