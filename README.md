# micro-frontends-basic
Basic example on microfrontend

Steps to run:

- Clone this repo on your local machine.
- This repo has 3 folders inside which are named as _container_, _products_ and _cart_
- Navigate into each folder and run `npm i && npm run start` to install transitive dependencies and start the local server.
- For each module/folder there will be one server running:
    - container -> `localhost:8080` (main app having both products and cart in it)
    - products -> `localhost:8081` (standalone products)
    - cart -> `localhost:8082` (standalone cart)
