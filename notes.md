Create project folder
Create server, client folders in it

## Server
cd into server
<!-- this will keep track of all the packages inside the application -->
npm init   
<!-- express: create a server in node.js -->
<!-- pg: connect dB to server -->
<!-- cors: allows different domain apps to work with each other -->
npm install express pg cors
create index.js file in server
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