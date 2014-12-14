app.Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'contacts/search': 'showAllContacts',
    'contacts/search/:query': 'showAllContacts',
    'contacts/favorites': 'showFavorites',
    'contacts/new': 'newContact',
    'contacts/:id': 'showContact',
    'contacts/edit/:id': 'editContact',
    'schedule': 'showSchedule',
    'login': 'showLogin',
    'logout': 'logout'
  }
});
