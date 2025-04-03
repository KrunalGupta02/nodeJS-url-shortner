## URL Shortner

Design a URL shortner service that takes in a valid URL and returns a shortened URL, redirecting the user

to previously provided URL.

Also , keep track of total visits clicks on the URL.

-> Routes:- 

POST /URL - Generates a new short URL and returns the shortened URL in the format example.com/random-id

GET /:id - Redirects the user to the original URL.

GET /URL/analytics/:id - Returns the clicks for the provided short id.