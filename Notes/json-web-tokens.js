/* 

* JSON WEB TOKENS (JWT)

? What is a JWT?

- A string, generated by an algorithm which contains relevant data about the user.
- We use tokens to authenticate and exchange information between parties - i.e. our SPA and our server.

? Why use tokens?

- Tokens are important because our server is stateless - it does not "remember" previous requests/interactions.
- However, every JWT issued by a server contains a secret key, only known by the server (a bit like the server's "signature").
- Therefore, if a user sends back a web token to the server (in a request), this proves to the server that it issued the key in the past, so the user is valid.

? What can we use JWTs for?

* 1. AUTHENTICATION
    - An authenticated user is a user that the server has already identified as a valid user in the past (e.g. one who gave a correct username and password).
    - When a user sends a valid token as part of a request from the frontend, the token can prove to the server that it already authenticated the user in the past.

* 2. AUTHORIZATION
    - Once a user is authenticated, we can also use a JWT to give them authorization to access certain routes on our server.
    - In our project there are some routes that only an authenticated user should be able to access.
    - E.g. creating a new album, deleting one album, deleting all albums
    - E.g. we want to make sure only a user who has signed up to our app can create a new album...
    - To do this, we can "protect" such routes - make it so only a user with a valid token can access them.
        - A user without a valid token will be blocked by the server from accessing "protected" routes.
        - You can therefore think of the token being used for authorization as like a "passport".

* Today's topics:

- First, let's look at how to generate a JWT on our server, and issue it to a user.
- Then we will look at implementing authorization, so only authenticated users can access certain routes on our server (see above).

*/