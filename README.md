# Cook Book

Webpage that allows you to browse, add, and edit your own recipes.

![image](https://github.com/cchen008/CookBook/assets/45343196/98c3c1fb-dd9a-42b1-bb3c-1f8c0c290e91)

## Description
In early 2023, I started cooking more frequently. I was following different recipes online but I would always have to make some minor tweaks to the recipe. For example, I would change the cooking time or the baking temperature of the recipe based on my oven. I started by keeping notes on these changes in a word document but after making many different recipes, I thought making a personal website that can store all my recipes would be a fun and interesting side project. 

## Live webpage
Cookbook has been deployed using Render.com's free tier. Use this [link](https://cookbook-5qsd.onrender.com/) to navigate to the application. 

## Navigation
### Homepage
* Click on a recipe in the table to open up the recipe contents.
* Click on the add button to add a new recipe. 
* Click on the edit button to navigate to the edit page of the selected recipe.
* Click on the delete button to remove a recipe.
  
### Edit Recipe page
* 

## Getting Started
### Installing
* Clone this repo

#### PostgreSQL
1. Restore the cookbook database. <br>
[Here is an example](https://www.postgresqltutorial.com/postgresql-getting-started/load-postgresql-sample-database/)

#### Springboot
1. Clone [cookbook-backend project](https://github.com/cchen008/CookbookRenderBackend).
2. Navigate to applications.properties file and change database url, username, and password.
![image](https://github.com/cchen008/CookBook/assets/45343196/f1c8c09c-b6ab-47e6-a47f-5d9bbd7990e0)

#### React
1. Open cookbook-frontend project.
2. Run ```npm install```

### Executing program
1. Run CookbookBackendApplication in cookbook-backend project
2. Run ```npm start``` in cookbook-frontend project
