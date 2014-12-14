app.Views.ContactForm = Backbone.View.extend({
  template: _.template($('#tpl-form').html()),

  events: {
    'submit .contract-form': 'onFormSubmit'
  },

  render: function() {
    var html = this.template(_.extend(this.model.toJSON(), {
      isNew: this.model.isNew()
    }));
    this.$el.append(html);
    return this;
  },

  onFormSubmit: function(e) {
    e.preventDefault();

    this.trigger('form:submitted', {
      name: this.$('[name=name]').val(),
      twitter: this.$('[name=twitter]').val(),
      info: this.$('[name=info]').val()
    });
  }
});
