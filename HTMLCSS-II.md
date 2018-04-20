---
title: HTML & CSS II
---

HTML/CSS II
======

**Introduction:
We will learn use what we know about HTML and CSS to add the framework bootstrap**

Create a codepen account at www.codepen.io , and create a new pen. We will start by using the code from the previous lab. Get it here:
https://enza-academy.github.io/DYR2018/HTMLCSS-II

Scroll down to the end of the list and paste into your pens -- HTML into the HTML tab and CSS into the CSS tab.

Open the Bootstrap documentation in a new tab:
https://getbootstrap.com/

Click "documentation" at the top of the page, and use this to guide you throughout the rest of the lab.

Include bootstrap within your head tags:

```html
<head>
  <title>[Project name]</title>
  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
</head>
```

You will immediately notice a difference in the style of the page after you add these lines.

We will make a change to the team photo: giving it a 'img-thumbnail' class to add the border as in bootstrap.
Sample image for this example: https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=581511fae3d6e46d55eb0b6f3d86b69d&auto=format&fit=crop&w=2250&q=80
```html
      <div id="team-section">
          <img class="img-thumbnail team-photo" src="[url/address of your image]">
          <br><span class="team-photo-title">[Image Title/Optional]</span>                                
          <p class="team-photo-blurb">
              Lorem ipsum ...
          </p>
      </div>
```

We will change our menu's from a ul to a 'nav', and give it a "nav" class. Make sure to also remove the 'top-menu' div tags. Doing this makes our menu Bootstrap-friendly since 'nav' elements are built into bootstrap. We will also remove the `<li>` elements from the links since it is now a nav and not a list. Your HTML should now be:
```html
<nav class="nav">
    <a class="nav-link" href="#home">Home</a>
    <a class="nav-link" href="#about">About</a>
    <a class="nav-link" href="#perks">Our Perks</a>
    <a class="nav-link" href="#contact">Contact</a>
</nav>
```

Center the menu by adding the Bootstrap built-in "justify-content-center" class to it, 
Fix it to the top of the page using the "fixed-top" bootstrap class,
and add a color theme (navbar-dark bg-dark / bg/primary) or bg-light
```html
<nav class="nav fixed-top navbar-dark bg-dark justify-content-center"> ... </nav>
```

Your CSS rules is now unsed. Let's change it to a class, "link-list", for usage later. Change `#top-menu` styles over to `.list-style` lets not forget to reduce the spacing between our links to margin: 30px:
```css
.list-style {
  list-style: none;
  padding: 0;
}

.list-style li {
  display: inline;
  margin: 30px;
}

.list-style li a { 
  color: rgb(0, 149, 255);  
  text-decoration: none;    
}

.list-style li a:hover { 
  color: grey;
}
```

Since Bootstrap has default text colors, we need to override them. We use the '!important' keyword to do this in CSS if the need ever arises;
```css
.example-class{
  color: green !important;
}
```

Next Lets use bootstrap to help us with out page layout. 
We will do this by using Boostraps container/row/column grid system.
For the about, perks, contact sections, add a new div under the heading that wraps all of the contents of that div.
the "container text-center" classes. This will give us nice padded sections to work inside of along with centered text.

Sample image for this example: https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=581511fae3d6e46d55eb0b6f3d86b69d&auto=format&fit=crop&w=2250&q=80
```html
<div id="about" class="contentSection">
  <h2>About</h2>
  <div id="team-section" class="container">
      <img class="img-thumbnail team-photo" src="[YOUR_IMG_URL]" alt="team photo">
      <br><span>[Image Title/Optional]</span>                                
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
      </p>
  </div>
</div>
```

Do the same for sections perks and contact
```html
<div id="perks" class="contentSection">
    <h2>Our Perks</h2>
    <div class="container">
      ...
    </div>
</div>

<div id="contact" class="contentSection">
  <h2>Contact</h2>
  <div class="container">
    ...
  </div>
</div>
```

Inside of our new perks container add a div with the classes 'row align-items-center'. This will help us keep our content within each section organized and center their contents vertically.

```html
<div id="perks" class="contentSection">
  <h2>Our perks</h2>
  <div class="container">
    <div class="row align-items-center">
      ...
    </div>
  </div>
</div>
```

For the sake of time we are going to add 3 divs aka "perks" of your product. Within the new row in our 'perks' section we are adding
3 new sections with an image, title and blurb(sounds familiar) with the class col-sm-4 from bootstrap. I will talk through this section:

Sample Image for this example: http://icons.iconarchive.com/icons/icons8/ios7/256/Network-Domain-icon.png
```html
<div id="perks" class="contentSection">
  <h2>Our perks</h2>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-sm-12 col-lg-4">
          <img class='perk-photo' src="http://icons.iconarchive.com/icons/icons8/ios7/256/Network-Domain-icon.png" alt="perk photo">
          <h4>Networking</h4>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div class="col-sm-12 col-lg-4">
          <img class='perk-photo' src="http://icons.iconarchive.com/icons/icons8/ios7/256/Network-Domain-icon.png" alt="perk photo">
          <h4>Productivity</h4>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
      <div class="col-sm-12 col-lg-4">
          <img class='perk-photo' src="http://icons.iconarchive.com/icons/icons8/ios7/256/Network-Domain-icon.png" alt="perk photo">
          <h4>Personalization</h4>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
          </p>
      </div>
    </div>
  </div>
</div>
``` 

We will be adding an advanced item to our page: a modal popup in the contact section. It works by using Javascript/JQuery in the background to style, animate and manipulate items on the page. To start on our contact section let swap out our old button with a bootstrap button to trigger our modal. Add class 'm-5' to the button to add some spacing and lets add a list of links to social media links using out 'link-list class':
```html
<div id="contact" class="contentSection">
  <h2>Contact</h2>
  <div class="container">
    <button type="button" class="btn btn-primary m-5" data-toggle="modal" data-target="#exampleModal">
      Contact Me!
    </button>
    <p>You can find me at any of the following place:</p>
    <ul class="link-list padding-0">
      <li><a href="">GitHub</a></li>
      <li><a href="">LinkedIn</a></li>
      <li><a href="">Twitter</a></li>
    </ul>
  </div>
</div>
```

Now let add a pre-built modal component to the contact section. The attributes aren't too important, as to how they work, just know they work. The important thing is to remember the 'data-target' attribute, because this is what makes the modal appear. We haven't created the modal yet, but we will do so now. Paste the following code AFTER the button code:

```html
<!-- Modal -->
<div id="contact" class="contentSection">
  <div class="container">
    ...
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="nameInput">Full Name</label>
              <input type="text" class="form-control" id="nameInput" placeholder="John Doe">
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="commentInput">Comment</label>
              <textarea class="form-control" id="commentInput" rows="3"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div> 

</div>
```
Notice we added a contact form inside the modal. You can add whatever you'd like, but the form is a good start.

Last lets add copy right text to our footer, you know.....because whynot?
```html
<div id="footer" class="text-center">
  <small>&copy; Copyright 2018 Angelo Zamudio </small>
</div>
```

Your HTML page should now look like this:

```html
<html lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>[Project name]</title>
      <!-- Bootstrap -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>      
  </head>
  <body>
    <nav class="nav fixed-top navbar-dark bg-dark justify-content-center">
      <a class="nav-link" href="#home">Home</a>
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#perks">Our Perks</a>
      <a class="nav-link" href="#contact">Contact</a>
    </nav>
    <div id="page-wrapper">
      <div id="home" class="full-width text-center">
          <!-- Title -->
          <div class="intro">
              <h1 id="title">{Your Title Here}</h1>
              <h4 id="sub-title">Welcome to my first website!</h4>
          </div>
      </div>
      <div id="about" class="contentSection">
        <h2>About</h2>
        <div id="team-section" class="container">
            <img class="img-thumbnail team-photo" src="[YOUR_IMG_URL]" alt="team photo">
            <br><span><strong>[Image Title/Optional]</strong></span>                                
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
      </div>
      <div id="perks" class="contentSection">
        <h2>Our perks</h2>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-4">
              <img class='perk-photo' src="[YOUR_IMG_URL]" alt="perk photo">
              <h4>Networking</h4>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-sm-12 col-lg-4">
              <img class='perk-photo' src="[YOUR_IMG_URL]" alt="perk photo">
              <h4>Productivity</h4>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-sm-12 col-lg-4">
              <img class='perk-photo' src="[YOUR_IMG_URL]" alt="perk photo">
              <h4>Personalization</h4>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" class="contentSection">
        <h2>Contact</h2>
        <div class="container">
          <button type="button" class="btn-lg btn-primary m-5" data-toggle="modal" data-target="#exampleModal">
            Contact Me!
          </button>
          <p>You can find me at any of the following place:</p>
          <ul class="link-list p-0">
            <li><a href="#" target="_blank">GitHub</a></li>
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
          </ul>
        </div>
        <div class="modal fade text-left" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="nameInput">Full Name</label>
                    <input type="text" class="form-control" id="nameInput" placeholder="John Doe">
                  </div>
                  <div class="form-group">
                    <label for="emailInput">Email</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="name@example.com">
                  </div>
                  <div class="form-group">
                    <label for="commentInput">Comment</label>
                    <textarea class="form-control" id="commentInput" rows="3"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div> 
      </div>
      <div id="footer" class="text-center">
        <small>&copy; Copyright 2018 Angelo Zamudio </small>
      </div>
    </div>
  </body>
</html>
```

Your CSS side should now look like:
```css
html, body {
  font-family: 'Montserrat', sans-serif;   
  margin: 0; 
}

.text-center {
  text-align: center;
}

.full-width {
  width: 100%
}

.half-width {
  width: 50%;
}

.padding-0 {
  padding: 0px;
}

#home {
  height: 600px;
  position: relative;
  background: #800000;
  /* background: linear-gradient(
      rgba(0, 0, 0, 0.65), 
      rgba(0, 0, 0, 0.15)
    ), url('https://cdn.stocksnap.io/img-thumbs/960w/3SNCXN2Z1B.jpg'); 
  background-size: cover; */
  color: #ffffff;        
}

.contentSection {
  min-height: 200px;  
  padding: 80px;
  text-align: center;
}

#perks {
  color: #ffffff;
  background: #02AAB0;
  /* background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
  background: linear-gradient(to right, #00CDAC, #02AAB0);  */
}

#footer {
  color: #fff;
  background: #343a40;
  padding-top: 40px;
  padding-bottom: 40px;
}

#footer ul {
  list-style: none;
  padding: 0;
}

#perks p {
  color: rgba(255, 255, 255, 0.90);
}

.team-photo {
  max-width: 600px !important;
  width: 100%;
  height: auto;
  margin-bottom: 40px;
}

h2 {
  padding-bottom: 40px;
}

.link-list {
  list-style: none;
  margin: 0;
}

.link-list li {
  display: inline;
  margin: 30px;
}

.link-list li a { 
  color: rgb(0, 149, 255);  
  text-decoration: none;    
}

.link-list li a:hover {
  color: grey;
}

.intro h1 {
  font-size: 60px;
  padding-top: 200px;
  margin-top: 0px;
}

.intro h4 {
  font-weight: 300;
}

.perk-photo {
  width: 200px;
  height: 200px;
  margin: 20px;
}
```

Now that you are familiar with adding components with bootstrap, take this time to scroll through the bootstrap documentation and try adding at least 2 more components to your pages for practice. We recommend adding a dropdown menu, and an image carousel.

Feel free to Google concepts that you either you are having trouble with, or desire to learn more information about. A great website to use to learn more about the topics discussed in class:<br>
**https://www.w3schools.com/**
<br>
Simply go here, search a specific topic, and you'll find detailed explanations and examples of all the topics that were discussed today.
