## Project 4 Health_Know_It Readme
 
 This project uses the npm package manager and has the following dependencies :
```
    "bluebird": "^3.3.5", "body-parser": "~1.13.2", "cookie-parser": "~1.3.5", "debug": "~2.2.0",
    "dotenv": "^2.0.0","ejs": "~2.3.3", "express": "~4.13.1", "express-session": "^1.13.0", "jsonwebtoken": "^6.2.0","mongoose": "^4.4.17","mongoose-bcrypt": "^1.3.0","morgan": "~1.6.1","passport": "^0.3.2","request": "^2.72.0","request-promise": "^3.0.0","serve-favicon": "~2.3.0","socket.io": "^1.4.5","xml2js": "^0.4.16"
```
Which can be installed using the npm install commad via the command line of the folder where you would contain this project.

### Setup

To clone the repo or copy the url to proceed to the direct link:
```sh
$ git clone https://github.com/thegibster/P4HealthKnow.git
```
Site may be reached at :
```sh
https://healthknow.herokuapp.com/
```
## Up and Running the Project
1. After cloning or downloading the zip(unzip)
2. To run on local server use the terminal to enter the directory and run nodemon to start the local server default port localhost 3000.
3. Or go to the heroku link for this project provided earlier in this Readme.

### Services provided
1. A user must either login or sign-up to use the app.
2. User will be able to view their current and past medical information including blood-type, past surgeries, etc... 
3. User will be able to look up a pill by either name or by the scarring that is on the pill and have a response returned to them identifying said pill or medication. 


### Known bugs and Issues
1. Ability to edit user data was pre-populated beforehand.
2. If the xml2js module is not used then the pill data cannot be used since the return data is in the form of xml and would not be properly parsed unless converted to the JSON object form.
