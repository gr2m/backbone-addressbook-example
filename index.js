var PORT = 3000;
var express = require('express');
var morgan = require('morgan');
var app     = express();
var PouchDB = require('pouchdb').defaults({
  prefix: './db/'
});
var request = require('request');

app.use(morgan('tiny'));
app.use(express.static(__dirname + '/app'));
app.use(require('express-pouchdb')(PouchDB));

app.listen(PORT);
console.log('serving at http://localhost:%s', PORT);


// Make sure contacts DB exists with right permissions
request.put('http://test:test@localhost:'+PORT+'/contacts')
.on('response', function(response) {
  request.put({
    url: 'http://test:test@localhost:'+PORT+'/contacts/_security',
    json: true,
    body: {
      admins:{
        names:[],
        roles:[]
      },
      members:{
        names:[],
        roles:['_admin']
      }
    }
  })
})
