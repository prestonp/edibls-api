Note
----
These are strictly backend tests running against an actual database. Ensure that the api 
is running with

    NODE_ENV == 'development'
    
So it will write to the dev database, and *not* the production database.

Simple examples would be CRUD operations, making sure the database works.
