# BookIT Maps

BookIT Maps guides users of the library booking system from bookit.unimelb.au to find the location of their bookings through an interactive map.

## Prerequisites

* Install node.js from their website https://nodejs.org/en/
* Once node is installed, use npm to install yarn
    ```
    npm install -g yarn
    ```

## Installing


Clone the project
```
git clone https://github.com/solexstudios/bookit-maps-front
```

Move into directory
```
cd bookit-maps-front
```

Install dependancies
```
yarn install
```

## Development build

As the front-end communicates with a third party website, you'll need to install this CORS plugin for it to serve locally and retrieve data:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en

```
yarn run dev-server
```
visit 
```
localhost:8080
```
in browser to see it run