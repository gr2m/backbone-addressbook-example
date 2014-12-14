app.Models.Contact = Backbone.Model.extend({
  defaults: {
    name: '',
    email: '',
    twitter: '',
    info: '',
    isFavorite: false,
    notes: []
  },

  type: 'contact',

  initialize: function() {
  },

  isFavorite: function() {
    return this.get('isFavorite') || false;
  },

  toggleFavorite: function() {
    this.set('isFavorite', ! this.isFavorite() );
  },

  matches: function(search) {
    var name = this.get('name') || '';
    var twitter = this.get('twitter') || '';

    return (name + twitter).toLowerCase().indexOf(search.toLowerCase()) >= 0;
  },

  addNote: function(text) {
    this.attributes.notes.unshift({
      time: Date.now(),
      text: text
    });
  },

  removeNote: function(index) {
    this.attributes.notes.splice(index, 1);
  }
});
