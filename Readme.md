## URL Shortner

Design a URL shortner service that takes in a valid URL and returns a shortened URL, redirecting the user

to previously provided URL.

Also , keep track of total visits clicks on the URL.

-> Routes:- 

POST ```/URL``` - Generates a new short URL and returns the shortened URL in the format example.com/random-id

GET ```/:id``` - Redirects the user to the original URL.

GET ```/URL/analytics/:id``` - Returns the clicks for the provided short id.

## Server Side Rendering 

We can use the EJS package for the server side rendering in the node js application.

**EJS** stands for Embedded JS Templating.

## Authentication :- 

Types:- 

Statefull => Which maintains state or data or server side 

Eg:- Cookies

- Memory Intensive 

- If server restarts then all the users are logged out.

Stateless => Which has no state

Eg:- JWT tokens

Note:- Banking websites always uses session bcz they required to work on that session only.

Note: Cookies cannot works on mobile devices 

With cookies we can signin automatically 

For mobiles 

- We can pass the token in the headers  and take it from headers.

