app.Views.Favorites = Backbone.View.extend({
  template: _.template($('#tpl-favorites').html()),

  initialize: function() {
    this.listenTo(this.collection, 'sync change', this.render);
  },

  renderOne: function(contact) {
    var itemView = new app.Views.ContactRow({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template(this.collection.favorites());
    var favorites = this.collection.favorites();
    this.$el.html(html);
    favorites.forEach(this.renderOne, this);

    return this;
  }
});
