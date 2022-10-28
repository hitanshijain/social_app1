# Social Media Application

## Product
- A social media application for college students which allows them to connect with classmates, posts, likes and comments - developed using React, Node, Express and MongoDB. 
- Basic Functionalities - Login by college email address, build college profile, Post, Follow, Search, Chat, Notifications
- Implement Personalized recommendation system for posts, friends as well as sponsored advertisements.

## Recommendation Systems
- It is a software tool and technique that provides suggestion based on the user's preferences from a large volume of information by filtering a set of information.
- Types:
Personalized
Non-Personalized

Things We will be implementing in our recommendation engine are:-

**Recommendation Engine Input Features:-**
   * profile information
   * courses
   * Major
   * Colleges(looking specifically for Boston based Colleges)
   * professional interests
   * More....( We have limited ourselves to these for now.)

**Recommendation output is User recommended**


## User stories
- As an app user, I want to have basic functionalities like login, create profile, post, follow, chat, search and get notifications.

- As a student, I want to receive recommendations about content (people to follow, grant opportunities, methods, conferences, etc.) that is of interest to me, so I can continuously increase knowledge in my field. 

- As a student, I want to look for partners with similar interests to work with me on team projects in college and also connect with alumni to grow my network and get access to more job opportunities. 

- As an alumni, I want to recruit students for jobs from my college to help them and also as I can trust the capabilities and their coursework easily.

## Technologies
### ReactJS (Front-end development)
Facilitates fast and interactive user interfaces as it uses virtual DOM. 
Component based approach which can be created once and used in multiple applications. 

### NodeJS (Back-end development)
Node.js uses asynchronous programming, which is the main reason for using it above PHP and ASP.net.

### MongoDB (Database)
Offers scalable document-oriented database storage which makes it ideal for applications requiring real-time scalabilities like large social networks.
Data are dynamic and schema-free.
MongoDB Atlas is convenient to use. 



![MERN Social](https://s3.amazonaws.com/mernbook/git+/social.png "MERN Social")

### [Live Demo](http://social2.mernbook.com/ "MERN Social")

#### What you need to run this code
1. Node (13.12.0)
2. NPM (6.14.4) or Yarn (1.22.4)
3. MongoDB (4.2.0)

####  How to run this code
1. Make sure MongoDB is running on your system 
2. Clone this repository
3. Open command line in the cloned folder,
   - To install dependencies, run ```  npm install  ``` or ``` yarn ```
   - To run the application for development, run ```  npm run development  ``` or ``` yarn development ```
4. Open [localhost:3000](http://localhost:3000/) in the browser


React combined with industry-tested, server-side technologies, such as Node, Express, and MongoDB, enables you to develop and deploy robust real-world full-stack web apps. 



##  Next Steps:

1. Creating a User form while user registeration to gather user info and store it in our database(mongodb atlas)
2. Creating a Dummy dataset for replicating the Inputs/Features of RC:
      * R.C Feature 1: Course 
      * R.C Feature 2: Degree  
      * R.C Feature 3: Colleges? 
         -  What time u graduate if you are an Alumni? (timeline/year)
         -  If you're currently studying, then just yes or no
      * R.C Feature 4: Professional interests (common)- select up to three or five ex sde, ml engineer etc.
   
3. Implementing Content-based filtering and utilizing the stored user features in the database to recommend users by displaying mutual connections, Linkedin-based simple filtering via inbuilt javascript methods, etc.

> Note:- Our Current Database also houses some features which will be helpful in recommendation:-

      * followers of a user(unique users)
      * (email-based authorization for checking unique users)
      * followings of a user(an array of unique elements)


### Problems we might face in the future but currently overlooked due to less time:-
- we're not recommending basis on the degree; thus, it means the degree of users doesn't have enough weight in the decision, which might make some recommendations for higher degree individuals not helpful. 
- recommending the basis of state currently, not the city(central) focusing in Boston right now might decrease the generalizability of the recommendations engine.
- fake account problems will be sorted currently by emails. Still, if users start spamming with new emails, we can't do anything right now....we will have to build a monitoring system or a reward base system for users putting productive content.
