// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.showPlaylist();
  },

  render: function() {
    this.$el.html('<tr><th>Artist</th><th>Song</th></tr>');
    // this.collection.each(function(song){
    //   this.addSong(song);
    // }, this);
    return this.$el;
  },

  showPlaylist: function(){
    _.each(this.collection.models, function(song){
      console.log('sqv', this);
      this.addSong(song);
    }, this);
  },

  addSong: function(song) {
    console.log('1', this.$el, song);
    this.$el.append( new SongQueueEntryView({model: song}).render() );
  },

  removeSongQueueEntry: function() {
    this.$el.find('tr').first().detach();
  }


});
