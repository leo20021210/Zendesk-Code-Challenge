# Zendesk_code_challenge

The program is written in Express and React, to start to program, go to backend folder, open terminal, run "npm install" to install packages you need first. Then run "npm start" or "nodemon server" to start backend.
Next, leave the terminal in backend folder running, go to frontend folder, open another terminal, run "npm install" and "npm start" to start frontend.
To see all tickets, check "http://localhost:3000/" in browser (I test it using Google Chrome.)
To see a specific ticket by id, check "http://localhost:3000/ticket/{id}", for example, if you want to see the 6th ticket, check "http://localhost:3000/ticket/6" (I test it using Google Chrome.) When you are entering a bad ticket id, you will go to an error page
To see all tickets but 25 tickets per page, check "http://localhost:3000/page"(I test it using Google Chrome.) You will automatically go to the first page. At the bottom of the page, you can try to fetch the previous page and next page. The system is a loop page system, that is to say, the next page of the last page is the first page, the previous page of the first page is the last page.
To run unit test, run "npm test", all five backend functions are tested there.

## Note
This is a express-based backend and react-based frontend project, if you follow my instruction above, you should be fine to see all information in the frontend, but if you have some problem with frontend, then try these backend links:
"http://localhost:3001/" to see all tickets
"http://localhost:3001/ticket/{id}" to see ticket with specific id
"http://localhost:3001/page/{page}" to see 25 tickets in one page, the next page number, and the previous page number.
The backend deals with all kinds of errors, but they are just displaying plain json instead of a more elegant listing. 


## Defects in the program that is not dealt with because of lack of time: (If there is more time, I am more than capable of solving them)
I should use .env to store my access token in order to make the tocken avoid git version control.
I should add more css files to decorate the frontend.
