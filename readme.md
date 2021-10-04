
INSTURCTION
1. clone repo
2. install dependencies
3. crete .env file and copy everything from .env.example
4. enjoy

example of local requests:

- GET http://localhost:4100/transports
- GET http://localhost:4100/routes


You can use https://fierce-reef-90055.herokuapp.com/ on heroku to test it with postman

example of requests:

1. get all data
- GET https://fierce-reef-90055.herokuapp.com/transports
- GET https://fierce-reef-90055.herokuapp.com/routes

2. get one by id
- GET https://fierce-reef-90055.herokuapp.com/transports/1
- GET https://fierce-reef-90055.herokuapp.com/routes/1

3. delete by id
- DELETE https://fierce-reef-90055.herokuapp.com/transports/1
- DELETE https://fierce-reef-90055.herokuapp.com/routes/1

4. update by id
- PUT https://fierce-reef-90055.herokuapp.com/transports/1
- PUT https://fierce-reef-90055.herokuapp.com/routes/1
