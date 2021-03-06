[![Build Status](https://travis-ci.org/Cody-Price/BYOB.svg?branch=master)](https://travis-ci.org/Cody-Price/BYOB)
![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)

# Build Your Own Backend - North Carolina Vineyards API

Time to relax and enjoy a stroll through our selection of beautiful North Carolina Vineyards. This API lets you find up to 30 stunning vineyards and some of thier associated wines while providing location and contact information for each vineyard so you can plan your own Northern Carolina vineyard tour depending on the area you plan on trekking through! A PostgreSQL database with a well documented API and built with Node.js, Express and Knex.js.

## How to Use:

#### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

#### Create Postgres Database and Run Migrations
* `brew install postgres`

* `psql CREATE DATABASE vineyards;`

* `knex migrate:latest`

* `knex seed:run`

#### Testing 
* `psql CREATE DATABASE vineyardstest;`

* `npm test`

## API Endpoints:

#### Vineyards
```
GET /api/v1/vineyards // get all vineyards
--> returns an array of vineyard objects

GET /api/v1/vineyards${queryString}
queryString: ?region=[Mountains OR Coast OR Piedmont] --> returns all vineyards associated with given region.
queryString: ?name=[Enter given name with '%20' between each word] --> returns an array of one vineyard object with a matching name.

GET /api/v1/vineyards/:id // get a specific vineyard
--> returns a specific vineyard object

POST /api/v1/vineyards  // create a new vineyard
--> required parameters: 'name'(string), 'address'(string), 'phone'(string in format '(XXX) XXX-XXXX'), 'region'(string), and 'region'(string of either 'Coast', 'Mountains', or 'Piedmont')

PUT /api/v1/vineyards/:id  // edit a given vineyard with corrected information for any one(or multiple) parameter(s) required in the POST vineyards endpoint directly above excluding the id (primary key).

DELETE /api/v1/vineyards/:id  // delete a specific vineyard and all wines associated with specified vineyard
```
#### Wines
```
GET /api/v1/wines // get all wines
--> returns an array of all wine objects

GET /api/v1/wines/:id // get a specific wine
--> returns a specific wine object

POST /api/v1/wines // create a new wine
--> required parameters: 'name'(string), 'color'(string), 'type'(string), 'vineyard_id'(number, this is to be associated with the primary key id of the associated vineyard)

PUT /api/v1/wines/:vineyard_id  // edit a given wine with corrected information for any one(or multiple) parameter(s) required in the POST wines endpoint directly above excluding the id (primary key).

DELETE /api/v1/wines/:id  // delete a specific wine

```
### Screenshots of various requests to the server utilizing the POSTMAN application.
#### Screenshot of a GET request to the vineyards database.
![screen shot 2019-01-31 at 12 51 39 pm](https://user-images.githubusercontent.com/40974490/52081920-a493a500-2558-11e9-8118-7bb01cedcadb.png)

#### Screenshot of a GET request to the wines database.
![screen shot 2019-01-31 at 12 52 18 pm](https://user-images.githubusercontent.com/40974490/52081966-cab94500-2558-11e9-866c-5287f3ce9d9f.png)

#### Screenshot of a QUERY GET request as well as the response.
![screen shot 2019-01-31 at 12 54 15 pm](https://user-images.githubusercontent.com/40974490/52082031-f0464e80-2558-11e9-8e6a-f1265dd095bc.png)

![screen shot 2019-01-31 at 12 54 25 pm](https://user-images.githubusercontent.com/40974490/52082156-3ef3e880-2559-11e9-907f-028ce17f2dbf.png)

#### Screenshot of a POST request to the vineyards database as well as the response.
![screen shot 2019-01-31 at 12 57 25 pm](https://user-images.githubusercontent.com/40974490/52082335-c3df0200-2559-11e9-97d8-a96736f808f2.png)

#### Screenshot of a PUT request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 21 pm](https://user-images.githubusercontent.com/40974490/52082691-b7a77480-255a-11e9-875e-7e772e799aba.png)

#### Example of a DELETE request to the wines database as well as the response.
![screen shot 2019-01-31 at 1 00 48 pm](https://user-images.githubusercontent.com/40974490/52082768-e32a5f00-255a-11e9-99f5-7fcab4bde177.png)


## To Contribute to the Project:

- Follow the setup instructions above to get the app up and running locally on your machine.

- Our list of Issues on GitHub Issues: (https://github.com/Cody-Price/BYOB/issues)
  Please use these issues to direct the contributions you desire to make.

- To send a Pull Request via GitHub:
    - Checkout a new branch
    - Add a forked version of this repo as your remote
    - Push up changes to your forked repo
    - Request the Pull Request to the original repo
    - Include a brief commit message details the changes you have made
    - Make sure to write tests for the front end
    - Make sure all tests are passing before you make a Pull Request
    - Before submitting, Rebase your work on the current master branch

## Technologies Used
- Node.js
- Express
- Knex
- Heroku
- Mocha
- Chai 
- Chai-http
- TravisCI
- Git/Github

## Project Requirements
Project spec [link](http://frontend.turing.io/projects/build-your-own-backend.html).

Backend Checklist [link](http://frontend.turing.io/projects/build-your-own-backend.html).

## Database/Server created and designed by Cody Price and Sara Ebbers.

[![Waffle.io - Issues in progress](https://badge.waffle.io/Cody-Price/BYOB.png?label=in%20progress&title=In%20Progress)](http://waffle.io/Cody-Price/BYOB)
