Create project folder
Create server, client folders in it

## Server
cd into server
<!-- this will keep track of all the packages inside the application -->
npm init -y   
<!-- express: create a server in node.js -->
<!-- pg: connect dB to server -->
<!-- cors: allows different domain apps to work with each other -->
<!-- dotenv manages environment variables -->
npm install express pg cors dotenv
create index.js file in server  (or server.js)
<!-- check index.js for essentials to start server -->
node index to run
better to install nodemon globally and then
nodemon index
 

## Postgres Database and table
at terminal 
psql -U postgres


## Connect databse and server
create a db.js file
check example
export instance in db.js
import it in index.js

## Client  (REACT)
cd into project folder
=> npx create-react-app client
delete folders App.test.js logo.svg serviceWorker.js setupTests.js
create a index.js and app.js files in client/src
index.js is saying that we will render app.js right in the root html file

npm start  on client folder
we should now see the app in the localhost/portnumber

npm install react-router-dom

create a routes folder in src and put all route files in there
check out PERN 2 at 3:14:24 context api 

npm install axios
so you can use axios to make api requests to the back end server
(or you can use the fect api)


## Postgres
use sql shell app     password shams1987
for help    \?
list database     \l
Create database   CREATE DATABASE database_name
\c databse_name will take you to the new database
\d    will list all the tables in that database
 