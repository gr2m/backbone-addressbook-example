app.Views.ContactRow = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#tpl-contact-row').html()),

  events: {
    'click .delete-contract': 'onClickDelete'
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.destroy();
  }
});
