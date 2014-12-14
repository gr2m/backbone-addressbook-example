app.Views.Search = Backbone.View.extend({
  template: _.template($('#tpl-search').html()),

  events: {
    'input [name=search]': 'onSearch'
  },

  initialize: function() {
    var view = this;
    this.listenTo(this.collection, 'sync change', function() {
      view.renderSearch(view.$('[name=search]').val());
    });
  },

  renderOne: function(contact) {
    var itemView = new app.Views.ContactRow({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function(query) {
    var html = this.template(this.collection);

    this.$el.html(html);
    this.renderSearch(query);

    return this;
  },

  renderSearch: function(query) {
    var results;
    var $query = this.$('[name=search]');

    if (query) {
      results = this.collection.filter(function(contact) {
        return contact.matches(query);
      });
    } else {
      query = '';
      results = this.collection.toArray();
    }

    this.$('.contacts-container').empty();
    results.forEach(this.renderOne, this);

    if ($query.val() === query) {
      this.trigger('search', query);
    } else {
      $query.val(query);
    }
  },

  onSearch: function(event) {
    this.renderSearch(event.target.value);
  }
});
