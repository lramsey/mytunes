// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    _.bindAll(this, 'songEnd');
    this.$el.bind('ended', this.songEnd);
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  songEnd: function(){
    this.trigger('nextSong');
  },

  stopPlay: function(){
    this.model = false;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});