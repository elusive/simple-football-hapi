## Node Web Application:  Simple Football
A sample app that demonstrates how to consume football-data RESTful API

## Getting Started
To run this application you can use my api key temporarily but I cannot gaurantee its functionality so if you plan to use this code please obtain your own api key from: [football-data.org](https://www.football-data.org/client/register) and place it in the server.js file here on line 12: 
```
 12     const API_TOKEN = '131d284ab2f442d5b3b79c7c868bd37c';
```

Clone the project repository by running the command below if you use SSH

`git clone https://github.com/elusive/simple-football.git`


Run the command below to install NPM dependencies

`npm install`

And then to run the app execute this command

`npm start`

to start the app and visit [http://127.0.0.1:3000/](http://127.0.0.1:3000/) to see the app in action.

### Credits
The source for this application was adapted from this repository <https://github.com/ammezie/serie-a-standings> which I found in an article about consuming REST services.  I have simplified the code and updated the api usage to its v2.

## Remarks
The point of this repository is to show how simple it is to create a modern web application using Nodejs.  This application consists of a package.json, server.js, and an index.html view.  This pattern can be used to start a web app and then expanded upon almost endlessly to make any sort of data-centric application neded.
