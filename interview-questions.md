# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: I would name the foreign key after the cohort and I believe it would go inside the Student Model. In order to fix this I would add the foreign key using migration but exactly how to that is escaping me. I'm sure that migration is the way to af it though. 

  Researched answer: The Foreign Key always goes on to the belongs_to (Cohort) side  and by convention should always be the modelname_id. The has_many is plural the cohort (singular) will have many students. I will rewatch https://www.youtube.com/watch?v=BoEr6aDsE_U&ab_channel=LEARNacademy to better understand. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: I believe get, post, and patch all need params because you are passing data. 

  Researched answer: Researching Parameters and RESTful routes turned up mostly empty. Parameters are used to query the database or dynamically modify the view by passing the value. They pass the value to the route vice the actual URL. I did have a note that the def create, def update and def destroy all require params but I don't have any reason listed. Exactly which ones must always pass parameters... further research/guidance is required. 



3. Name three rails generator commands. What is created by each?

  Your answer: Personally I'm familiar with rails g model, g controller, and g scaffolding. The model will create a new model (database), the controller (views routes model) is the communication between the three phases of the app and scaffolding is something I have to brush up on. While researching rails generators in the past, I read up on it but don't exatly remember it's purpose. 

  Researched answer: Model generator is a Ruby class that creates database records. You can search, update, or delete data from the model

  The Controller generator is a logical command center that coordinates each interaction between the user and the program. 


  The Scaffold generator includes the controller and the model. It is the basic of a rails project and is database migration


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students         read - It will display new content       

method="POST"   /students         create - It will make new content (send data to server) ex.. request time off.

method="GET"    /students/new     read - It will display new content 

method="GET"    /students/2       read - It will display new content

method="GET"    /students/2/edit  read - It will display new content  

method="PATCH"  /students/2       update - will edit content - if successful a 200 (0k) status code if response is cacheable

method="DELETE" /students/2       delete - remove content - if successful the following will happen
        - A 202 (Accepted) status code if the action will likely succeed but has not yet been enacted.
        - A 204 (No Content) status code if the action has been enacted and no further information is to be supplied.
        - A 200 (OK) status code if the action has been enacted and the response message includes a representation describing the status.



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer I can create an to-do  model in the database. An to-do has the following information: title, category, priority, and status.

As a user, I can see a landing page that shows the to-do list application with rows and colums showing: title, category, priority, and status. 

As a user I can access a database with to-dos on it

As a user I can add (create) to-dos to the database

As a user I can delete to-dos from the database

As a user I can see and alter (create) what is still to-do and what has been completed aka the status.

As a user I can I can set priorities to each item on the list

As a user I can add an alarm to each item on the list

As the user  I can destroy an to-do in the database.

As the user  I can add a specific member name to assign to-do ex. Wash Dishes in category Kitchen with a priority of high and a status of incomplete is assigned to Larry. 

As a developer I can pray to god that I got this right because I'm not a story writer in any capacity.




