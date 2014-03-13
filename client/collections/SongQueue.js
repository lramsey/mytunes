// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  localStorage: new Backbone.LocalStorage("your-playlist")
});