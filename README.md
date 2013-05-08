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
 
License
-------
The MIT License (MIT)

Copyright (c) 2013 Preston Pham <preston.a.pham at gmail dot com> & Jeejo Pallayi
<jeejo at pallayi dot com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
