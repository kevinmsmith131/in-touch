# InTouch
A social media platform that allows users to post pictures with captions, like posts, and follow other users whose content they wish to view.

## Premise
InTouch was built with the intent of providing a social media app that allows users to stay in touch with the people of their choosing, without anyone else being able to find their profile. The way that InTouch enforces this is by providing no way, such as searching, to find other users unless they personally provide the link to their profile. As long as a user chooses a unique username that no one is likely to guess, similar to the way one chooses a password, then only the people that they share their profile link with will be able to stay in touch with them. This idea of making hard to guess usernames is the reason that differently cased usernames such as *User* and *user* are considered two different usernames. To minimize any negative interactions, users are only able to like the posts of other users, but not comment on them or message other users about them.

## Features
### Registration Page
The registration page provides a form that allows for a user to enter an email, username, password, confirm the password, and submit this information to create their account. The app ensures that the email follows the email format of *a@b.c*, the username is not already in use, and the passwords are *at least* 5 characters and match each other. The app uses a middleware called bcrypt to store an encrypted version of the password in the database. If all of these conditions are met, a new profile will be registered with the provided information. There is also a button that allows a user to navigate to the login page.

### Login Page
The login page provides a form that allows for a user to enter their email and password, and then submit this information to be logged in. The app checks for a user with this information, and if one exists, logs them in. There is also a button that allows a user to navigate to the registration page.

### Home Page 
##### Header
The header is the blue bar across the top of the page. On the left of the header there is an icon that signs the user out when clicked, in the center there is an InTouch logo that brings the user to the top of the home page when clicked, and on the right is the user's profile picture that brings the user to their profile page when clicked. If the user has not set a profile picture, a default avatar will be supplied.

##### Following Bar
The following bar displays all of the users that the logged in user is following. Each of the displayed users can be clicked to be brought to their profile page. The header that reads "Following" at the top of the following bar stays at the top of the bar, even when scrolling, and can be clicked to be brought to the top of the following bar, if the user has scrolled down. If the user is not following any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Feed
###### Make New Post Box
At the top of the make new post box there is the logged in user's profile picture, which can be clicked to bring the user to their profile page, and there is an input field where the user can type the caption of the post. If the user has not set a profile picture, a default avatar will be supplied. Below there are four buttons, one for attatching pictures to the post, and the rest are for updating the logged in user's profile picture, cover picture, and bio respectively. For the uploading a post picture, changing the profile picture, and changing the cover picture buttons, after the button is clicked there is a popup that allows a user to select an image to attach, and when the image is selected a preview of the image is shown in the make new post box, with a small icon in the top right corner of the image that allows the user to cancel the image upload. Finally the last button on the bottom allows the user to finalize and post everything they have entered, and this button accepts posts with only a caption and posts with only an image, but it does not allow for empty posts.

###### Existing Posts
The posts displayed belong are either made by the logged in user, or the users that the logged in user follows. Each post has the profile picture and username of the user that made the post on the top, and these can both be clicked to be brought to that user's profile page. If the user has not set a profile picture, a default avatar will be supplied. Directly below the length of time since the post was made is displayed in the format *0 seconds -> now, 10 seconds ago -> 10s, 10 minutes ago -> 10m, 10 hours ago -> 10h, 10 days ago -> 10d, 10 months ago -> 10mo, 10 years ago -> 10yr*. Below this is the caption of the post, if one was included, and the image of the post, if this was included. Below this is a button that allows a user to like or unlike the post, and the count of how many users have liked the post. Finally, since posts that the logged in user makes will appear in their feed, if a post in the feed was made by the logged in user, there will be an icon with three horizontal dots in the top right corner of the post. When this icon is clicked, there will be a small pop up next to the icon that allows the user to either edit the caption of the post, or delete the post. When the feed is empty, there will be a graphic that informs that there are no posts to be displayed.

### Profile Page
##### Header
The header is the same as the header for the home page, except since this time we are on a profile instead of the home page, if the InTouch logo is clicked the logged in user is brought to the home page, and if their profile picture is clicked, the logged in user is brought to the top of the page if the profile page being displayed is their own, or they are brought to their own profile page, if the profile page being displayed belongs to another user.

##### Following Bar
The following bar is the same as the following bar for the home page, except it displays the followed users for the user whose profile page is currently being diplayed. If the user is not following any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Profile Introduction
The profile introduction has a cover picture with the user's profile picture on top of it. If the profile picture or cover picture have not been set by the user, a default will be provided. Below is the user's username and below that is the user's bio if they have set one. If the profile page being displayed belongs to the logged in user, to the right of the username and bio there will be an icon with three horizontal dots. When this icon is clicked there will be a pop up to the left of the icon that allows the logged in user to change their email, username, password, or delete their account. If the user switches to another user's profile while the pop up is displayed, the pop up immediately disappears, which is import for security reasons, because if the pop up were to stay up while on another user's profile, the logged in user would be able to use to change the information of other users. One thing to note is that when scrolling down on a profile page, the section containing the username, bio, and icon with its pop up will remain at the top of the screen, and the username can be clicked to be brought back to the top of the page.

##### User Information
The user information section displays the user's location, job, and place of education. If the user has not set any of these fields, the app will inform that the field has not been specified. If the profile page belongs to the logged in user, the icon to the left of each field will be clickable, and clicking on the icon will allow the user to edit the field. There is a 40 character limit on each field, to keep the information concise and to the point. If the profile page does not belong to the logged in user, above the information section there will be a button that reads either "Follow" or "Unfollow", depending on whether or not the logged in user already follows this user, and when the button is clicked the corresponding follow or unfollow will occur, and the button will switch to the opposite of what it currently was (Follow -> Unfollow or Unfollow -> Follow).

##### Followers Bar
The followers bar is the same concept as the following bar, except it instead displays the users that follow the user whose profile page is being displayed. If the user is not followed by any other users, then a graphic is displayed in the following bar reporting that the user is not following any other users.

##### Feed
###### Make New Post Box
This is the same as the make new post box from the home page. It will only appear if the profile page being displayed belongs to the logged in user.

###### Existing Posts
The existing posts are the same as the existing posts from the home page, except the posts displayed are made by the user whose profile is being displayed. If the profile page belongs to the logged in user, all of the posts will have the three horizontal dots icon, in the top right corner of the post, that allow the user to edit the caption or delete the post. If the user whose profile is being displayed has not made any posts, there will be a graphic that informs that there are no posts to display. As a side note, if the logged in user is on another user's profile page the no posts graphic will stay in the center of the screen as the user scrolls down, since it is the only content to display, but if the profile page belongs to the logged in user, the make new post box will also be on the page, and since it would look very unnatural for the make new post box to move, or for the no posts graphic to move on its own while the make new post box stays in place, both the make new post box and no posts graphic stay in place while the user scrolls. If you are interested in gettting a better idea of what this might look like, the user Sarah has been left with no posts to demonstrate this exact concept.

## Technologies
InTouch is a full stack web application that runs on the MERN stack. This means any data that the application stores is stored in a MongoDB database, the backend server is implemented using the Express framework, the runtime environment that the server runs on is Node.js, and the frontend is built using the React framework. The backend server adheres to RESTful API principles, and the frontend utilizes the React Context API to keep track of the currently logged in user. The application is deployed to the cloud using Heroku.

## How do I get InTouch?
You can access the application using this url: https://in-touch-heroku.herokuapp.com/

If you would like to see what the app looks like for a user who is following and is followed by many other users, you can use the login `sofie@gmail.com` and password `123456`. If you would like to log in as any of the other users, their logins are  
`<their username in all lowercase>@gmail.com` and their passwords are `123456`. Feel free to use these accounts to try out following, unfollowing, liking, and whatever else you might want to do.

If you would like to test out the features that make changes to a profile such as changing the username, email, password, or deleting an account, please register your own account to do so.

Creating your own profile also allows you to see how the app handles the empty defaults that are mentioned in the features section.
