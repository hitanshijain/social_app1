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


## Time Line of Project

> Third Week Sprint:  Implementing the Following things for Recommendation:
  
  ###**Recommendation engine**
 
 > Recommendation Engine Input:-
   * profile information
   * courses
   * major
   * school(looking specifically for boston based schools)
   * professional interests
   * Might be more features but we have limited ourselves to these for now.

> Recommendation output is User recommended

### Things to Perform for Building the Recommendation Engine:

> Things to do Create a Dummy dataset for repliciating the Inputs/Features of RC:
    * Feature 1: course 
    * Feature 2:degree  
    * Feature 3: colleges? 3
        * What time u graduated if you are an Alumni? (time line/year)
        * If u’re currently studying then just yes or no
    * Feature 4: professional interests (common)  select upto three 5 ex sde, ml engineer etc.
   
> Current Database features helpful in recommendations:-
    * followers of a user(unique users)* 
        * (email based authorization for checkign unique users)
    * followings of a user(a array of unique eleements)

  
  
  
Note: Problems we might face in future but currently overlooked due to less time:-
-  recommendiong basis of degree not rn
- state currently not city(major) focusing in boston rn
- fake accounts problems not to be sorted right now


*
### Future Steps:-

* Collecting actual high quality data from students responses through type forms

