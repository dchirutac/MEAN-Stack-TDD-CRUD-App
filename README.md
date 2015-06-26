# MEAN-Stack-TDD-CRUD-App
Mongo Express Angular Node - TDD - with Karma, Protractor, & Jasmine

###Install:
######Requirements:
  Node, Bower
- - -

  `git clone https://github.com/Paz23/MEAN-Stack-TDD-CRUD-App.git`

  `npm install`
- - -
###Start server:
  `node server.js`

- - -
####Testing
#####Karma:
  `npm test`

#####Protractor:
  `npm run protractor`
  or
  `protractor test/protractor-conf.js`

######Note:
  To not error with Protractor add one widget prior to running.

- - -
#####Directory Tree
(doesn't have all the files listed)
```
.
├── angular
│   ├── bower_components
│   ├── css
│   │   ├── animations.css
│   │   ├── normalize.css
│   │   └── style.css
│   ├── img
│   │   └── favicon
│   │       └── favicon.ico
│   ├── js
│   │   ├── app.js
│   │   ├── directives
│   │   │   └── directive.js
│   │   ├── factories
│   │   │   └── factory.js
│   │   ├── filters
│   │   │   └── filters.js
│   │   └── services
│   │       └── services.js
│   └── views
│       ├── error.ejs
│       ├── index.ejs
│       └── partials
│           └── main.html
├── bower.json
├── express
│   ├── config
│   │   ├── config.js
│   │   ├── mongoose.js
│   │   └── routes.js
│   ├── controllers
│   │   └── widgets.js
│   ├── helpers
│   │   ├── dbUtility.js
│   │   ├── formatDate.js
│   │   └── formatTime.js
│   └── models
│       └── widget.js
├── node_modules
├── package.json
├── server.js
└── test
    ├── e2e
    │   ├── README.md
    │   └── scenarios.js
    ├── karma.conf.js
    ├── protractor-conf.js
    └── unit
       ├── directiveSpec.js
```
