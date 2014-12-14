window.app = {
  Models: {},
  Collections: {},
  Views: {},

  currentView: null,
  start: function() {
    var contacts = new app.Collections.Contacts();
    var router = new app.Router();

    router.on('route:home', function() {
      router.navigate('contacts/search', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showAllContacts', function(query) {
      if (app.currentView) app.currentView.remove();

      app.currentView = new app.Views.Search({
        collection: contacts
      });
      $('.main-container').html(app.currentView.render(query).$el);

      $('.sidebar .active').removeClass('active');
      $('.sidebar .nav .search').addClass('active');

      app.currentView.on('search', function(search) {
        if (search) {
          router.navigate('contacts/search/'+search);
        } else {
          router.navigate('contacts/search');
        }
      });
    });

    router.on('route:showFavorites', function() {
      if (app.currentView) app.currentView.remove();

      app.currentView = new app.Views.Favorites({
        collection: contacts
      });

      $('.main-container').html(app.currentView.render().$el);

      $('.sidebar .active').removeClass('active');
      $('.sidebar .nav .favorites').addClass('active');
    });

    router.on('route:newContact', function() {
      if (app.currentView) app.currentView.remove();

      app.currentView = new app.Views.ContactForm({
        model: new app.Models.Contact()
      });

      app.currentView.on('form:submitted', function(attrs) {
        contacts.create(attrs, {
          success: function(newContact) {
            router.navigate('contacts/' + newContact.id, true);
          }
        });
      });

      $('.main-container').html(app.currentView.render().$el);

      $('.sidebar .active').removeClass('active');
      $('.sidebar .nav .new').addClass('active');
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id);
      if (app.currentView) app.currentView.remove();

      if (contact) {
        app.currentView = new app.Views.ContactForm({
            model: contact
        });

        app.currentView.on('form:submitted', function(attrs) {
          contact.save(attrs, {
            success: function(contact) {
              router.navigate('contacts/' + contact.id, true);
            }
          });
        });

        $('.main-container').html(app.currentView.render().$el);
      } else {
        router.navigate('contacts/search', true);
      }
    });

    router.on('route:showContact', function(id) {
      var contact = contacts.get(id);

      if (app.currentView) app.currentView.remove();
      if (contact) {
        app.currentView = new app.Views.Detail({
            model: contact
        });

        $('.main-container').html(app.currentView.render().$el);

        app.currentView.on('destroy', function() {
          router.navigate('contacts/search', true);
        });
      } else {
        router.navigate('contacts/search', true);
      }

      $('.sidebar .active').removeClass('active');
    });

    router.on('route:showSchedule', function() {
      if (app.currentView) app.currentView.remove();

      app.currentView = new app.Views.Schedule({
        collection: contacts
      });

      $('.main-container').html(app.currentView.render().$el);

      $('.sidebar .active').removeClass('active');
      $('.sidebar .nav .schedule').addClass('active');
    });
    router.on('route:showLogin', function() {
      if (app.currentView) app.currentView.remove();

      app.currentView = new app.Views.LoginForm();

      $('.login-container').html(app.currentView.render().$el);

      app.currentView.on('login:success', function(username) {
        app.currentUser = username;
        contacts.fetch();
        router.navigate('contacts/search', true);
      });
    });

    router.on('route:logout', function() {
      $.ajax({
        type: 'DELETE',
        url: '/_session'
      }).then(function() {
        router.navigate('login', true);
      });
    });

    contacts.fetch()
    .done( function () {
      Backbone.history.start();
    })
    .fail( function() {
      Backbone.history.start();
      router.navigate('login', true);
    });
  }
};
