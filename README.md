# HW 7 - {Train-Time}
A train schedule application called "Train-Time" that incorporates Firebase to host arrival and departure data. Train-Time will retrieve and manipulate this information with Moment.js. This application will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

## Live Link 
(https://blakeredwolf.github.io/Train-Time/) 
Code on GitHub Link 
(https://github.com/BlakeRedwolf/Train-Time)

## User can input a train name, travel destination and details about there train to see when the next arrival time will be.

## Requirements
####

- Make sure you are using Firebase to store data.
- When adding trains, administrators should be able to submit the following:
- Train Name
- Destination
- First Train Time -- in military time
- Frequency -- in minutes
- Code this app to calculate when the next train will arrive; this should be relative to the current time.
- Users from many different machines must be able to view same train times.
- Styling and theme are completely up to you. Get Creative!

## Technologies Used
####

- HTML
- CSS
- JavaScript
- Jquery
- AJAX
- Firebase
- Moment.js

## Code Explaination
- Started with a simple bootstrap template
- Added some basic styling
- Initialized Firebase and created a variable to reference the database (db) later
- Created a function called SetTrain, that on click of the submit button will store the input values to a variable
- Created a db each function to populate the html table on the index page, with table rows that include table data <tr><td>
- Created an anchor tag, that was used as a button, and tied a onclick=EditTrain function to edit train data
- Used basic .empty() and blank ("")'s to empty data from tables after submission, on value update via snapshot
-------------