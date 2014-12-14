app.Views.Schedule = Backbone.View.extend({
  template: _.template($('#tpl-schedule').html()),

  render: function() {
    var contactIdsByTwitter = this.collection.reduce(function(memo, contact) {
      var twitter = contact.get('twitter');
      if (twitter) {
        memo[twitter] = contact.id;
      }
      return memo;
    }, {});
    var html = this.template({twitter: contactIdsByTwitter});
    this.$el.html(html);

    return this;
  }
});
