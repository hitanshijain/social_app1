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



##  Next Steps Due as of Next Week:

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
      
> Note:- In the Next steps The, 1. and 2. have been fulfilled, and 3. logic for the recommendation engine has been brainstormed, which you can see when reading below and now we're proceeding to implement at least one recommendation system



## Current Status of Recommendation Systems as of 10/30/22:-

The User form which helps to create a user profile by letting users input their data has been added in the UI of the social application. The user Form Image added in the UI is being shown below for reference:


![WhatsApp Image 2022-10-31 at 1 02 25 PM](https://user-images.githubusercontent.com/44031169/199066034-3cf71858-0375-48a9-b9ee-6fdea8f0afcf.jpeg)




A Dummy Dataset required to construct the recommendation system has been created. The Dummy data screenshot is being shown below for reference:

<img width="1439" alt="image" src="https://user-images.githubusercontent.com/44031169/199065500-a2331f7e-95db-4256-a066-15766d1247d9.png">

In addition, the dummy dataset features have been pushed to our online mongo DB atlas database, and now the app currently houses 1000 users. The Application UI's screenshot showcasing the current users after the platform has grown to a considerable amount of users as users register and fill the user form is shown below for reference:

![WhatsApp Image 2022-10-31 at 12 54 44 PM (1)](https://user-images.githubusercontent.com/44031169/199065798-8def5812-3892-48df-8bc7-c47d9c72545e.jpeg)

> Note:-*The current branch called "basic_recommendation" houses the latest code as of 10/31/22*

## Next Week Plan to Implement atleast one Recommendation Engine:-


In the Recommendation Feed Page we'll be implementing two recommendation engines:-
### Recommendation System1:
![WhatsApp Image 2022-10-31 at 12 29 04 PM](https://user-images.githubusercontent.com/44031169/199059583-40644605-087c-405b-8e98-06e5c11f06b4.jpeg)

These are the steps the recommendation sys one will follow, which contains two filters:-

1.) In the first Filter, We'll recommend users based on the filter criteria written below in decreasing priority with their respective weights. These three features will help sort the recommendations and return users as recommendations.
The Features are:
	1. Professional Interests (a)
	2. College(b)
	3. Major (c)

> Note: We will also weight these features such that no one feature dominates over others, and also the critical features are given priority by increasing weigths such as the weights of each being a, b, c, and the sum of these weights, i.e., a+b+c = 1 and these weights should be non-negative.
> Moreover, the current values of the weights have been preset as: a=.60, b=.30, and c=.10. 

2.) This is the second filter, and this will be a user-defined selection such that it contains two mini filters:
### Mini filter1: If the user wants only current graduate students to be recommended, then select this filter and return five recommendations to the user.
### Mini filter2: If the user wants to be recommended only alumni (people who have passed out and will be working in the industry, most likely), then it will return the user five recommendations.

*Final Output*: Also, In this is a Recommendation Feed, we will return the user with five recommendations with the title: "Maybe these people meet your Interest, and you might want to follow them?
 

### Recommendation System2:
![WhatsApp Image 2022-10-31 at 12 29 04 PM (1)](https://user-images.githubusercontent.com/44031169/199059605-5ea47a28-1c84-4839-96df-0b1329eec2b3.jpeg)

This system will only work after the first System has kicked in and started generating at least enough data for a user such that a User's follower and the following list has been filled with at least m, n >10(a number for now). 
Every user will have its profiling is done which is nothing but a matrix containing the subscripts of users the users are following and are followers. the matrix will be n*m .







### Problems we might face in the future but currently overlooked due to less time:-
- we're not recommending basis on the degree; thus, it means the degree of users doesn't have enough weight in the decision, which might make some recommendations for higher degree individuals not helpful. 
- recommending the basis of state currently, not the city(central) focusing in Boston right now might decrease the generalizability of the recommendations engine.
- fake account problems will be sorted currently by emails. Still, if users start spamming with new emails, we can't do anything right now....we will have to build a monitoring system or a reward base system for users putting productive content.

