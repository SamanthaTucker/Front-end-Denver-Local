# Front-end-Denver-Local (Capstone)


## Denver Local:
An application based on local attractions and resturant recommendations made by Users. End Users should be able to create their own account, add blog like posts recommending Denver local resturants, attractions, activities, etc. I am taking my very first coding project and updating it into a Denver Local App.

### User Stories:

* Users should be able to create their own account with a Username and Password.
* Users should be able to log in and see a personal landing page with their posts.
* Users should have the ability to like other posts from other users.
* Users should be able to EDIT and DELETE their posts.
* Users should be able to DELETE their account if they want.
* Users should be able to see a map with a searchbar for local places like resturants, bars, activities, etc.
* Users should be able to log out and have their posts saved to their accounts.

### Stretch Goals:
* Add an API showing resturants or bars rather than an entire Mapbox.
* Users will have a personalized profile picture, or at least a personal username icon.
* Users can comment on other posts while logged in.
* Add a Weather widget to show the weather in their area while searching for activities.
* I want to challenge myself and potentially make the form for a new post pop up on a modal.
* Create a carosel of images on the Create Account landing page.
* Add more than one API


### API's
A few different API's for potential use - 
* https://docs.mapbox.com/api/overview/ MapBox
* https://developer.ticketmaster.com/products-and-docs/apis/getting-started/?ref=apilist.fun For searching local events 
* https://developer-tripadvisor.com/content-api/documentation/

### Routes:
Route | URL | HTTP | Description
------| ----| -----| -----------
Index | /login | GET | User Sign in landing page
New | /signup | POST | User creating an account with Username and Password
Show | /home | GET | Once User is signed in/ created an account they will get a personal landing page. Users created posts will be shown here
Create | /new | POST | Users will create a new post
Edit | /edit/:id | PUT | Users can edit already created posts
Destroy | /delete/:id | DELETE | Users can delete their posts


### WireFrame

**Create Account/ Signin Landing Page**
![Image of Landing Page](https://i.imgur.com/Jz44tQk.png)

**User Landing Page/ After signin**
![Image of User Page](https://i.imgur.com/jvGUnog.png)

**Create Post form modal/page**
![Image of Post Form](https://i.imgur.com/o5jivpf.png)
