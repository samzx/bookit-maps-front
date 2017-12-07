# BookIT Maps

BookIT Maps guides users of the library booking system from bookit.unimelb.au to find the location of their bookings through an interactive map.

## Prerequisites

* Install node.js from their [website](https://nodejs.org/en/).
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

As the front-end communicates with a third party website, you'll need to install this CORS plugin for it to serve locally and retrieve data.
[Download here](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en).
To serve up local server, run in terminal:
```
yarn run dev-server
```
visit `localhost:8080` in browser to see it run

## Tools
Configure `location-finder.js` to import the correct svg to map.
Run the local dev server:
```
yarn run location-finder
```
visit `localhost:8080` and click on the map to mark a location.
* Press `Z` to undo last mark
* Press `Enter` to print marked locations to console
* Copy locations from console to relevant file in `locations` folder. Provide id's in the form of `{$id}:{x:$x, y:$y}` eg. `804:{x: 501, y: 531},` 

## Testing
Testing done through jest. All test files can be found under `src/tests/`.
To run tests, run in terminal:
```
yarn test
```