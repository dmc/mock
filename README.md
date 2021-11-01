# mock-server

Mock Server using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
$ git clone ${GIT_URL} ${LOCAL}
$ cd ${LOCAL}
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Access Heroku
https://mocken.herokuapp.com/true
then returned http status 200 with body as 
```
{"changed":"true"}
```

https://mocken.herokuapp.com/false
then returned http status 200. and body is 
```
{"changed":"false"}
```

https://mocken.herokuapp.com/bad
then returned http status 400. and body is 
```
{"error": "bad request"}
```

https://mocken.herokuapp.com/forbidden
then returned http status 403. and body is 
```
{"error": "forbidden"}
```

https://mocken.herokuapp.com/notfound
then returned http status 404. and body is 
```
{"error": "not found"}
```

## Deploying to Heroku

```
$ heroku create
$ git push heroku main
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
