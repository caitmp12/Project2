1. Technologies used

Writing Prompts Daily uses HTML, CSS, Javascript, Node.js, Mongoose, Express, EJS. 


2. Approach Taken

I kept this app simple. 

It feeds the user a writing prompt (pulled randomly from the array in the seed data, found in prompts/index.js). The user is able to make a new post by clicking "Write Today's Prompt. This takes them to through the New/Create routes. 

Once their posts are created, the post is added to the MongoDB data (schema found in posts/index.js), and is then rendered on their main page. 

Each post can be individually clicked and viewed, and edited. As well as deleted. 

Basically, the restful routes. 

Eventually, I would like to expand this and include the following:
    1. Connect the prompts to dates, so the app shows only one per day, no matter how many times a user logs back in or refreshes the page. 
    2. A timer application within the site that allows users to time writing sprints. 
    3. User interaction, i.e. community. 
    4. Styling


3. Link to site

https://cmp-zenproject2.herokuapp.com/

4. Installation Instructions



5. Unsolved problems

Unsolved problems include the following:
    -Mainly styling. All routes run correctly

Areas I struggled and need more practice:
    -Using two sets of data
    -Using correct paths within my files to create the routes
    -Typos, simple syntax errors    