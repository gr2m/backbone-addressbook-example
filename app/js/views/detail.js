app.Views.Detail = Backbone.View.extend({
  template: _.template($('#tpl-detail').html()),

  events: {
    'click [data-action="delete"]': 'onClickDelete',
    'click [data-action="favorite"]': 'onClickFavorite',
    'click [data-action="remove-note"]': 'onClickRemoveNote',
    'submit .notes-form': 'onNoteSubmit'
  },

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.onDestroy);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
    this.model.get('notes').forEach(this.renderOne, this);
    return this;
  },

  renderOne: function(note, index) {
    var itemView;

    note.index = index;
    itemView = new app.Views.Note({model: note});
    this.$('.notes-container').append(itemView.render().$el);
  },

  onClickFavorite: function(event) {
    event.preventDefault();
    this.model.toggleFavorite();
    this.model.save({}, {
      success: this.render.bind(this)
    });
  },

  onClickDelete: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  onClickRemoveNote: function(event) {
    var $button = $(event.target);
    var index = $button.closest('[data-index]').data('index');

    event.preventDefault();
    this.model.removeNote(index);
    this.model.save({}, {
      success: this.render.bind(this)
    });
  },

  onNoteSubmit: function(event) {
    var $form = $(event.target);
    event.preventDefault();
    this.model.addNote($form.find('[name=note]').val());
    this.model.save({}, {
      success: this.render.bind(this)
    });
  },

  onDestroy: function() {
    this.trigger('destroy');
  }
});

app.Views.Note = Backbone.View.extend({
  template: _.template($('#tpl-note').html()),

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
    return this;
  }
});
