// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  save: function(){
    var playlist = JSON.stringify(this.models);
    window.localStorage.setItem('playlist', playlist);
    console.log("saved");
  }

});