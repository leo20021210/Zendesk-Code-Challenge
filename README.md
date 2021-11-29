# Zendesk_code_challenge

The program is written in Express and React, to start to program, go to backend folder, open terminal, run "npm install" to install packages you need first. Then run "npm start" or "nodemon server" to start backend.
Next go to frontend folder, open terminal, run "npm install" and "npm start" to start frontend.
To see all tickets, check "http://localhost:3000/" in browser (I test it using Google Chrome.)
To see a specific ticket by id, check "http://localhost:3000/ticket/{id}", for example, if you want to see the 6th ticket, check "http://localhost:3000/ticket/6" (I test it using Google Chrome.) When you are entering a bad ticket id, you will go to an error page
To see all tickets but 25 tickets per page, check "http://localhost:3000/page"(I test it using Google Chrome.) You will automatically go to the first page. At the bottom of the page, you can try to fetch the previous page and next page. The system is a loop page system, that is to say, the next page of the last page is the first page, the previous page of the first page is the last page.
To run unit test, run "npm test", all five backend functions are tested there.
