function bootstrapContacts() {
  var collection = new app.Collections.Contacts();

  [
    {
      "name": "Jeremy Ashkenas",
      "twitter": "jashkenas",
      "info": "Speaker: Keynote\n\n",
      "isFavorite": true
    },
    {
      "name": "Matt Dennewitz",
      "twitter": "mattdennewitz",
      "info": "Speaker: Backbone at Pitchfork\n\nIn this talk, I'll cover Pitchfork's broad integration with Backbone. Everything from our audio player, to Advance, to our award-winning Cover Story features (and even the site itself), and even our advertising layer all rely on Backbone in one way or another. This overview will touch on building organizing complex Backbone apps, routing and history management, and our general usage philosophy."
    },
    {
      "name": "Brenda Jin",
      "twitter": "cyberneticlove",
      "info": "Speaker: Jasmine Testing for Backbone.js Models and Views\n\nBehavior-driven development with Jasmine testing enables developers to create thoughtful software design. Testing helps us match code to expectation, and communicates our intentions to other developers. When coupled with Backbone.js, Jasmine can become a powerful tool in ensuring the scalability of our web application. In addition, testing on Views in the browser helps us find bugs before the effort of visual QA.\n                This session will cover a breakdown of how to approach Jasmine testing for Backbone.js Models and Views, how Jasmine testing works with instantiating new Models and Views, and how to trigger and test custom events and their callbacks."
    },
    {
      "name": "John K. Paul",
      "twitter": "johnkpaul",
      "info": "Speaker: Ember Components Make My Heart Sing\n\nFrom my own Backbone experience, I’d like to give you all a basic understanding of Ember, the client side MVC framework. Once you have a small foundation of how Ember works, and how it can help you develop applications within a browser, I’ll explain how Ember Components are awesome, unbelievably useful, and unparalleled in expressiveness. Ember Components are a basic building block and primitive in the Ember universe that gives us the power of Web Components, before they are actually implemented in all modern browsers. Ember gives us the ability to use these features of the future right now in our applications."
    },
    {
      "name": "Gregor Martynus",
      "twitter": "gr2m",
      "info": "Speaker: Building Offline First Applications with Backbone\n\nAssume for a minute that the technical side of building offline-capable web applications was really simple. Imagine having a robust, reliable app instead of one that turns into a wonky disappointment when it's disconnected for a moment. An app that works with zero latency no matter whether you are on 100Mbit cable or a drip-feed EDGE connection, but still synchronizes your data across all devices seamlessly.\n                All this raises a number of questions: What does building apps offline first mean in terms of your application's structure? What new things can you do? What problems can you solve? What problems does it cause? Is it just trouble, or is it the future?\n                This talk is about persistent local data & synchronization, decentralization & data ownership, new challenges & opportunities, about today's solutions and tomorrow's expectations in an offline first world."
    },
    {
      "name": "Ryan Muller",
      "twitter": "_baconscript",
      "info": "Speaker: Go with the flow: Backbone and Streams\n\nOne of the most exciting paradigms to become popular recently is Functional Reactive Programming (FRP). While the initial learning curve can be quite steep, FRP can help you write concise, idiomatic, and easy-to-debug code. I'll help you leverage streams in your Backbone application while avoiding a few common rocky shoals.\n                This talk will demonstrate the creation of a simple chat app using the Bacon.js library, Backbone, and a NodeJS server. Topics covered will include a brief primer on FRP, tying your streams to your Backbone models and views, leveraging FRP to prevent common pitfalls, and seamlessly making your streams available on the server and multiple clients."
    },
    {
      "name": "James Smith",
      "twitter": "jmeaspls",
      "info": "Speaker: Marionette: The Backbone framework\n\nOver the past couple of years, Marionette has become the preferred framework for Backbone. It is trusted by some of the largest companies, and is backed by a core team developing for the future. Marionette allows you to build rich web applications, like Ember or Angular, while staying true to Backbone's philosophies and without leaving web standards behind.\n                Marionette is more than a collection of Classes for Backbone. It’s also a set of conventions that, when followed, keep your Backbone application's code more readable, maintainable, and consistent.\n                In this talk, I’ll go over some of the most useful features of Marionette, and how can they can be used to solve common problems like deeply nested views and creating a decoupled architecture."
    },
    {
      "name": "Rachel Baker",
      "twitter": "rachelbaker",
      "info": "Speaker: The WordPress JSON REST API\n\nThe JSON REST API coming to WordPress (hopefully) 4.1 means you can use Backbone models and collections to build data-rich applications or power WordPress themes.  Learn how to use the WordPress JSON REST API to get or post content from or back to WordPress."
    },
    {
      "name": "Tim Griesser",
      "twitter": "tgriesser",
      "info": "Speaker: Data Based JavaScript\n\nThis talk will cover patterns in wrangling data on both sides of the wire, anywhere from Backbone's Model & Collection layers, to the Backbone-inspired Bookshelf.js ORM, and even newer persistent data structure libraries like Immutable.js and Mori."
    },
    {
      "name": "Henrik Joreteg",
      "twitter": "HenrikJoreteg",
      "info": "Speaker: Keynote\n\nAmpersand.js evolved out of how we've been building Backbone.js apps for years at &yet.\n                You can think of Ampersand.js as a very a node.js-flavored fork of Backbone. Even the \"core\" components like like the Models are completely optional and individually published as stand-alone modules to npm. As a developer you just install and use what you need.\n                In this talk, I'll explain what led us to this point, what we gain from this, and where the project is headed from here.",
      "isFavorite": true
    },
    {
      "name": "Clément Wehrung",
      "twitter": "cwehrung",
      "info": "Speaker: A visit to the world of responsive real-time\n\nThis session will dive deep into the core challenges faced by any modern application trying to maximize the user experience by offering real-time data binding, dynamic data loading, and visualization.\n                First, I'll put real-time and Backbone into perspective and explain their common interest and showcase a concrete example of the lightweight Backfire library, which brings a real-time backend to Backbone through Firebase. I'll also discuss the consequences and caveats of using such real-time providers, from the impact of denormalization to a quick comparison of various possible data-bindings. \n                Finally, we'll drive into some advanced topics related to dealing with large, constantly changing data sets, including loading data child-by-child or in batchs, and working with sorted collection views."
    },
    {
      "name": "Daan Mortier",
      "twitter": "tjoekbezoer",
      "info": "Speaker: The Backbone Tango: Dancing with geographical data\n\nUsing Backbone as the core of our geo app has been a blessing in many ways. But working with large amounts of geographical data also presents some challenges. This session will shine a light on the ways we extended Backbone to solve some of them.\n                \n                  Topics that will be covered:\n                  \n                    Handling large amounts of geographical data\n                    Spatial indexing for a fast cache\n                    Lazy loading Collections and Models\n                    Grouping multiple requests into one\n                    Keeping track of failed HTTP requests across sessions"
    },
    {
      "name": "Shirley Wu",
      "twitter": "shirleyxywu",
      "info": "Speaker: Marrying Backbone.js and D3.js\n\nWhen I gave my first talk on this topic a year ago, someone came up to me after and said, “Maybe I don’t understand, but it just doesn’t seem that difficult”.  I agree.  I don’t think it’s hard to use Backbone and D3 together.  But what I think is difficult is to come up with a pattern of using them together well.  The two libraries want ownership of a lot of the same things; they both want control of the DOM, and they both want to dictate the data flow.\n                So who should do what?\n                For my first attempt, I injected D3 code directly into Backbone Views.  I let Backbone dictate the structure and data flow, and let D3 have the DOM.\n                Then I learned about reusable D3 charts, and the merits of separating Backbone and D3.  I let D3 do most of the heavy lifting, taking advantage of its enter-update-exit pattern, and used Backbone as the data store.\n                It worked well for a lot of my projects, until I started hitting seemingly random bugs on one particular project.  It was fascinating.\n                So for the third time, I kept the reusable D3 charts but gave the power back to Backbone.  Instead of letting D3 calculate what to enter or what to exit, I took advantage of Backbone's change, add, and remove events.  This seemed to solve the bugs.\n                I don’t believe there’s one definite answer to “who should do what”.  Different projects have different needs, and we should choose the approach that makes the most sense for the particular situation.  In that sense, I hope my experiences can help others marry Backbone and D3 in a way that works for them."
    },
    {
      "name": "Andrew Rota",
      "twitter": "andrewrota",
      "info": "Speaker: Web Components + Backbone: a Game-Changing Combination\n\nWeb Components promise to change how we think about modularity on the web, and when combined with the structure and organization of Backbone.js we can create portable, dynamic, encapsulated UI modules that fit into any web application.\n                Web Components open up new, low-level interfaces for developers to create modules on the web with Custom Elements, HTML Templates, HTML Imports, and the Shadow DOM.   These are exciting new technologies for web modularity, but on their own they can provide neither the rich interactivity nor maintainable structure we’ve come to expect in our JavaScript web applications.  Other JS libraries are already exploring mechanisms for integrating Web Components, but Backbone.js, with its light-weight, flexible API, is in a unique position to provide a solid foundation for UI modules, and indeed entire UI libraries, built with Web Components.\n                This talk will provide an introduction to Web Components, but will focus on how Backbone can utilize each of their APIs to create well-structured UI modules to be reused and shared between web applications.  It will present patterns for creating these modules and consider best practices for creating components in sharable UI libraries.  And while browser support for Web Components is rapidly improving, this talk will also consider the polyfills available to start using Web Components in Backbone.js applications today.\n                Web Components and Backbone.js complement each other and, together, are a revolutionary pair that offers new and exciting approaches for developing interactive UI modules on the web."
    },
    {
      "name": "Kris Walker",
      "twitter": "kixxauth",
      "info": "Speaker: Backbone in XBox and Windows Apps\n\nI work for a little company called MadGlory Interactive, where we've been working on a matchmaking app for gamers targeted at the Xbox platform. In order to tame the complexity of the client/server relationship and the WinJS driven UI, we've found Backbone to be invaluable. Speaking Backbone is a common thing on our team, not to mention the value of having a well understood architecture to make something which is complex seem simple. In this talk, I'll talk about some of the approaches we've taken to bringing Backbone into this seemingly foreign environment, including:\n                  \n                    Using abstract and concrete models to model the application logic.\n                    Cleaning up and killing zombies in a world where page changes are driven by another framework, without any refresh to clear memory.\n                    Using events to keep modules decoupled.\n                    Driving a widget based UI framework with Backbone Views."
    },
    {
      "name": "Sam Breed",
      "twitter": "sambreed",
      "info": "Speaker: React & Backbone, Sittin’ in a Tree\n\nOver the past year, it seems that Backbone has fallen further behind  more comprehensive frameworks like Ember and Angular in usage, features, and adoption. If you’ve bought into the new stuff, things are pretty great;  modern front end applications are easier to write and manage than ever.\n                But what about those of us who were late to the party, and now have large, cumbersome Backbone apps, and are staring down the barrel of starting over from scratch?\n                This is the tale of a few too-big applications and how to go about teaching an entire team of developers how to effective snuff out bad performance in big, scary JavaScript apps (hint: the answer isn’t more Backbone.) We’ll highlight techniques that can be used to get the most out of old Backbone apps without having to commit to a full rewrite of your application — and also how to get your older apps feeling more streamlined and modern.\n                Most importantly, we’ll explore how Backbone apps can be refactored to seamlessly integrate with React — and how you can get back some of the bragging rights you’ve lost to the projects using the other “cooler” frameworks. Along the way, we’ll also discuss a few small changes you can make now to your older Backbone apps to prepare for a less monolithic landscape and how to architect towards more framework-neutral code."
    },
    {
      "name": "Jason Laster",
      "twitter": "jasonlaster11",
      "info": "Speaker: Backbone under the Magnifying Glass: Tools for Exploring and Debugging Your Apps\n\nEmber and Angular's Inspector projects have shown that application level inspectors can add a lot of value, and there's no reason why great tools can't be built on top of Backbone as well. In this talk, I'll walk through a suite of tools we've built at Etsy for working with our apps. These tools are in the process of being turned into the Marionette Inspector, but are general purpose enough where they could be adapted to help any backbone developer.\n                The Inspector is organized in terms of three main categories: UI, Messages, and Logging. The UI tool, borrows from the web inspector's magnifying glass metaphor to add hover events to your app for real-time view introspection with a view panel. Messages adds a pub-sub tool for viewing all of the message types that can be sent through your app, as well as the the call points and handlers. Logging wraps up of the events and messages sent through your app in a searchable way, with references to the arguments, and call points. \n                With the Inspector, you'll be able to debug your applications by exploring your application in the browser and spend less time jumping through JavaScript source files."
    },
    {
      "name": "Greg MacWilliam",
      "twitter": "gmacwilliam",
      "info": "Speaker: Teaching Backbone (and other cool technologies)\n\nThis talk will focus on growth and mentorship aspects of transitioning technologists into highly-functional team members. The talk introduces growth mind-set, and then addresses training and onboarding practices for building a performant team.\n                But wait – this is about Backbone, right? While the talk's running theme revolves around mentorship and fostering growth, a lot of these discussions can be framed within the construct of Backbone. The first question of many new Backbone developers is, \"What is this thing, and what do I do with all these random pieces?\" Answering this question explores many facets of approaching new material, scaffolding knowledge, and building proficiency. The Backbone community may also find the specific teaching examples interesting, which will reference some common choke points that I've observed in the past while teaching Backbone fundamentals."
    }
  ]
  .forEach(collection.create, collection);
}
