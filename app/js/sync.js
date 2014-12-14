Backbone.sync = function(method, model, options) {
  switch (method) {
    case 'read':
      if (model.id) {
        return $.getJSON('/contacts/' + model.id).then(mapIdFromCouchDb);
      }

      return $.getJSON('/contacts/_all_docs?include_docs=true').then(function(response) {
        return response.rows.map(function(row) {
          return row.doc;
        }).map(mapIdFromCouchDb);
      }).then(options.success, options.error);
    case 'create':
      return $.ajax({
        type: 'POST',
        url: '/contacts',
        data: JSON.stringify( mapIdToCouchDb(model) ),
        contentType: 'application/json'
      }).then(function(response) {
        response = JSON.parse(response);
        model.set({
          id: response.id,
          _rev: response.rev
        });
        return model.toJSON();
      })
      .then(options.success, options.error);
    case 'update':
      return $.ajax({
        type: 'PUT',
        url: '/contacts/' + model.id,
        data: JSON.stringify( mapIdToCouchDb(model)),
        contentType: 'application/json'
      }).then(function(response) {
        response = JSON.parse(response);
        model.set({
          _rev: response.rev
        });
        return model.toJSON();
      }).then(options.success, options.error);
    case 'delete':
      return $.ajax({
        type: 'DELETE',
        url: '/contacts/' + model.id
      }).then(options.success, options.error);
    }
};

function mapIdFromCouchDb (model) {
  model.id = model._id;
  model._id = undefined;
  return model;
}
function mapIdToCouchDb (model) {
  model._id = model.id;
  model.id = undefined;
  return model;
}
