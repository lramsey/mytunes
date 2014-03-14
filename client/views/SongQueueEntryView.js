// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function(song){
    _.bindAll(this, play, render);
    this.song = song;
    this.render();
  },

  play: function(){
    //if song is last in collection, next in line as it were
    if(this.songQueue[0] === this.song){
      this.setSong(this.song);
    }
  },
  render: function(){

  }
});
