app.Views.LoginForm = Backbone.View.extend({
  template: _.template($('#tpl-login').html()),

  events: {
    'submit .login-form': 'onFormSubmit'
  },

  initialize: function() {
    _.bindAll(this, 'handleSignInSuccess', 'handleSignInError');
  },

  render: function() {
    this.$el.html(this.template({}));
    this.show();
    return this;
  },

  show: function() {
    $('.login-container').addClass('show');
  },

  hide: function() {
    $('.login-container').removeClass('show');
  },

  onFormSubmit: function(event) {
    var username = this.$('[name=username]').val();
    var password = this.$('[name=password]').val();

    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/_session',
      data: {
        name: username,
        password: password
      }
    }).then(this.handleSignInSuccess, this.handleSignInError);
  },

  handleSignInSuccess: function(response) {
    this.hide();
    response = JSON.parse(response);
    this.trigger('login:success', response.name);
  },


  handleSignInError: function() {
    alert('Oops! An error occured')
  }
});
