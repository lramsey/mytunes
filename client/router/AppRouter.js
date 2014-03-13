var AppRouter = Backbone.Router.extend({
  routes: {
    'songs/:title': 'song' // matches http://example.com/#anything-here
  }
});
