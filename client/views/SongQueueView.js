// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('<th>Playlist</th>');
    return this.$el;
  },

  addSong: function(song) {
    this.$el.append( new SongQueueEntryView({model: song}).render() );
  },

  removeSongQueueEntry: function() {
    this.$el.find('tr').first().detach();
  }


});
