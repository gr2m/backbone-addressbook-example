Address Book
============

> An example Backbone app

This is a very basic example app that is using [express-pouchdb](https://github.com/pouchdb/express-pouchdb)
for its REST backend.

It only has one model, on collection, and a slightly customized
Backbone.sync to adapt to the REST API.

This app has been used as demonstration to showcase how to build
Offline First applications with Backbone & Hoodie at BackboneConf
2014 in Boston.

## Setup

```
git clone git@github.com:gr2m/backbone-addressbook-example.git
cd backbone-addressbook-example
npm install
npm start
```

To bootstrap some contacts, run `bootstrapContacts()` in the browser
console and reload the page

## License

MIT
