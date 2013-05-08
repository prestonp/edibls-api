edibls-api
==========

Overhauling backend services to separate project.

Documentation on API endpoints can be found [here](http://docs.edibls.apiary.io/).

Install
-------
* Install Node.js
* Install mongo
* Install other tools
    * forever - `$ npm install -g forever`
    * mocha - `$ npm install -g mocha`
* Use `npm install` to download dependencies
* Add NGINX virtual server block to `/usr/local/nginx/conf/nginx.conf`


Run
---

    $ mongod &
    $ forever start app.js

Check yo self before you wreck yo self
--------------------------------------

    // Check the production server
    $ curl api.edibls.com/restaurants
 
    // or locally..
    $ curl localhost:3001/restaurants
    
Test
----

Use whatever test command you'd like. Do *not* test in production!!!

    $ npm test
    $ make test
    $ mocha --reporter spec

Authors
-------

* [Preston Pham](http://prestonpham.com)
* [Jeejo Pallayi](http://pallayi.com)
