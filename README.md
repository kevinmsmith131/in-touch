# InTouch
A social media platform that allows users to post pictures with captions, like posts, and follow other users whose content they wish to view.

## Premise
InTouch was built with the intent of providing a social media app that allows users to stay in touch with the people of their choosing, without anyone else being able to find their profile. The way that InTouch enforces this is by providing no way, such as searching, to find other users unless they personally provide the link to their profile. As long as a user chooses a unique username that no one is likely to guess, similar to the way one chooses a password, then only the people that they share their profile link with will be able to stay in touch with them. To minimize any negative interactions, users are only able to like the posts of other users, but not comment on them or message other users about them.

## Features
### Registration Page
The registration page provides a form that allows for a user to enter an email, username, password, confirm the password, and submit this information to create their account. The app ensures that the email follows the email format of *a@b.c*, the username is not already in use, and the passwords are *at least* 5 characters and match each other. If all of these conditions are met, a new profile will be registered with the provided information. There is also a button that allows a user to navigate to the login page.

### Login Page
The login page provides a form that allows for a user to enter their email and password, and then submit this information to be logged in. The app checks for a user with this information, and if one exists, logs them in. There is also a button that allows a user to navigate to the registration page.

### Home Page 
##### Header
The header is the blue bar across the top of the page. On the left of the header there is an icon that signs the user out when clicked, in the center there is an InTouch logo that brings the user to the top of the home page when clicked, and on the right is the user's profile picture that brings the user to their profile page when clicked. If the user has not set a profile picture, a default avatar will be supplied.

##### Following Bar
The following bar displays all of the users that the logged in user is following. Each of the displayed users can be clicked to be brought to their profile page. The header that reads "Following" at the top of the following bar can be clicked to be brought to the top of the following bar, if the user has scrolled down. If the user is not following any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Feed
###### Make New Post Box
At the top of the make new post box there is the logged in user's profile picture, which can be clicked to bring the user to their profile page, and there is an input field where the user can type the caption of the post. If the user has not set a profile picture, a default avatar will be supplied. Below there are four buttons, one for attatching pictures to the post, and the rest are for updating the logged in user's profile picture, cover picture, and bio respectively. For the uploading a post picture, changing the profile picture, and changing the cover picture buttons, after the button is clicked there is a popup that allows a user to select an image to attach, and when the image is selected a preview of the image is shown in the make new post box, with a small icon in the top right corner of the image that allows the user to cancel the image upload. Finally the last button on the bottom allows the user to finalize and post everything they have entered, and this button accepts posts with only a caption and posts with only an image, but it does not allow for empty posts.

###### Existing Posts
Each post has the profile picture and username of the user that made the post on the top, and these can both be clicked to be brought to that user's profile page. If the user has not set a profile picture, a default avatar will be supplied. Directly below the length of time since the post was made is displayed in the format *0 seconds -> now, 10 seconds ago -> 10s, 10 minutes ago -> 10m, 10 hours ago -> 10h, 10 days ago -> 10d, 10 months ago -> 10mo, 10 years ago -> 10yr*. Below this is the caption of the post, if one was included, and the image of the post, if this was included. Below this is a button that allows a user to like or unlike the post, and the count of how many users have liked the post. As a side note users are allowed to like their own post. Finally, since posts that the logged in user makes will appear in their feed, if a post in the feed was made by the logged in user, there will be an icon with three horizontal dots in the top right corner of the post. When this icon is clicked, there will be a small pop up next to the icon that allows the user to either edit the caption of the post, or delete the post. When the feed is empty, there will be a graphic that informs that there are no posts to be displayed.

### Profile Page
##### Header
The header is the same as the header for the home page, except since this time we are on a profile instead of the home page, if the InTouch logo is clicked the logged in user is brought to the home page, and if their profile picture is clicked, the logged in user is brought to the top of the page if the profile page being displayed is their own, or they are brought to their own profile page, if the profile page being displayed belongs to another user.

##### Following Bar
The following bar is the same as the following bar for the home page, except it displays the followed users for the user whose profile page is currently being diplayed. If the user is not following any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Profile Introduction

##### User Information

##### Followers Bar
The followers bar is the same concept as the following bar, except it instead displays the users that follow the user whose profile page is being displayed. If the user is not followed by any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Feed

## Technologies
InTouch is a full stack web application that runs on the MERN stack. This means any data that the application stores is stored in a MongoDB database, the backend server is implemented using the Express framework, the runtime environment that the server runs on is Node.js, and the frontend is built using the React framework. The backend server adheres to RESTful API principles, and the frontend utilizes the React Context API to keep track of the currently logged in user. The application is deployed to the cloud using Heroku.

## How do I get InTouch?
You can access the application using this url: https://in-touch-heroku.herokuapp.com/

If you would like to see what the app looks like for a user who is following and is followed by many other users, you can use the login sofie@gmail.com and password 123456. If you would like to log in as any of the other users, their logins are *their username in all lowercase*@gmail.com and their passwords are 123456. Feel free to use these accounts to try out following, unfollowing, liking, and whatever else you might want to do.

If you would like to test out the features that make changes to a profile such as changing the username, email, password, or deleting an account, please register your own account to do so.

Creating your own profile also allows you to see how the app handles the empty defaults that are mentioned in the features section.
