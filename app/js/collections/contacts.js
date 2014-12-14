app.Collections.Contacts = Backbone.Collection.extend({
  model: app.Models.Contact,
  comparator: 'name',

  favorites: function () {
    return this.filter(function(contact) {
      return contact.isFavorite();
    })
  }
});
