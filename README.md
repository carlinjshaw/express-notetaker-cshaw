# express-notetaker-cshaw


live heroku site: https://express-note-taker-cshaw.herokuapp.com/

This site uses node.js and express to handle the back-end responsibilities of responsding the fetch requests from the user. 
the router module of express handles the changing html page, from the index file, to the place that users can enter information. 

Once user input is entered, the fetch request commences.
The express.get method takes the data that is currently in the Json file and sends it to the front end. 
The express.post method takes user input and adds it to the Json file.
The get and post methods loop to continuously and immediately update the front end for the user. 


![image](https://user-images.githubusercontent.com/82618604/125327999-c8ef3080-e311-11eb-9bdb-5ca5d63a35db.png)

![image](https://user-images.githubusercontent.com/82618604/125328046-d7d5e300-e311-11eb-8f1d-c0cae4744d77.png)
