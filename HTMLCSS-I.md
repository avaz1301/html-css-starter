---
title: HTML & CSS I
---

HTML/CSS I
======
**Introduction:
We will learn basic HTML & CSS to create a basic landing page for your project. We will dissect the components of an HTML page, discussing different elements & tags.**

Open a new browser session, preferably Chrome. Create a codepen account at www.codepen.io , and create a new pen. 

HTML pages are documents comprised of components called "elements". Every HTML page has elements. 

Think of this: in chemistry, matter is composed of elements. Every piece of matter contains elements from the periodic table. You can view web page elements as exhibiting the same functionality.

Just as every element on the periodic table has properties that make them unique, the same can be said about HTML elements. 


HTML Tab
======

Every HTML page has encapsulating tags; meaning that the tag begins, content is added within the tag, and the tag is closed off with a matching tag. For example, every HTML page has "master" HTML tags, with an opening `<html>` tag, and ending with a closing `</html>` tag. The tags are simply composed of: a less-than sign, the name of the tag, and a greater-than sign. The HTML tag simply has 'html' between the less-than & greater-than signs as its tag. This is how the interpreter knows the document is HTML.

```html
<html>
</html>
```

Notice the similarities and differences between the opening and closing tags? They are exactly the same except for an extra "/" after the closing tag's less-than(<) sign.

Before we continue to the next step, it is a good idea for you, the developer, to know exactly what is happening in the code. Developers do this by adding comments to their code. Comments are pieces of code that are there for reference purposes, and are not seen on the user side or executed. These are usually used for informing other developers looking at the code of something the original developer thought was important to indicate. They can also be helpful for you to use if you step away from your code for a good length of time and return to it.

In HTML, we define a comment with: less-than sign(<), an exclamation mark(!), 2 hyphens(--), and is closed off with 2 hyphens(--) and a greater-than sign(>):
```html
<!-- This is a comment. -->
```
Let's practice creating comments in our editor:
```html
<!-- This is a comment. -->
<!-- I will add code here. -->
<!-- This will be a landing page. -->
```

We will be adding comments before each important section we create. This will help us know exactly what we are doing every step of the way.

Every part of the HTML page's content is enclosed within some nested tag of the HTML document. Because of this, when we add more content to the page, we must use the proper tags for the content we're adding. 

The next section of the HTML document is the `<head></head>` tags. Content within these tags contain identifying information about the document, such as titles, descriptions, and other types of data. This information is NOT seen on the user's end, but tools such as search engines and web crawlers use it to properly understand the document. For example, when you see a page in Google results, there is usually a title and description. This is the information defined in the code's title and description tags.

We will add `<head>` tags to our document. Ensure your comments match indentation of the line in which you are commenting about. Remember that this will be nested between our `<html>` tags. Every time we nest an element, we should make our code easier to read and see the nested effects. This is done by indenting 4 spaces for each nested level. However, most code editors use the "Tab" key as a shortcut to do this. Our document should now look like:
```html
<html>
  <!-- creating head tag-->
  <head></head>
</html>
```

Let's add our first piece of data to this page, which is the title. As you may have guessed, we need `<title></title>` tags to do this. Add your title within the `<head>` tags of the page.

This gives us:
```html
<html>
  <!-- creating head tag-->
  <head>
    <title>[Project name]</title>
  </head>
</html>
```

This gives us something to display to browser tabs and search engine results. Remember, we have not yet added anything we can see on the user side, so this title will not be displayed on the screen.
  
The next tags we will add for the tool we are building are `<body>` tags. The body tags simply tell the HTML interpreter that everything between the `<body></body>` tags is the content of the page. Everything we see displayed on an HTML page, such as images, paragraphs, and tables, is placed within the `<body>` tags.
  
HTML tags are composed hierarchically. With our current code, we see that we have master `<html>` tags, a child `<head>` tag, which has a child `<title>` tag of its own. That being said, <head> and <body> are siblings -- where do you think this means the `<body>` tags are placed? Because they are siblings, `<head>` and `<body>` tags are hierarchically on the same level. However, the `<head>` tags are always defined before the `<body>` tags. Let's add our `<body>` tags to our code:

```html
<html>
  <!-- creating head tag-->
  <head>
    <title>[Project name]</title>
  </head>
  
  <!-- creating body tag -->
  <body>
  </body>
</html>
```

Now that we have a section to hold the code we can actually see, we can now start adding visual elements to the page. The first thing we should do is add our menu. A menu is simply a list of links, so we need to add list tags. Page menus aren't numbered, so we will use unordered list tags(`<ul>`). If we want numbered lists, we use ordered list(`<ol>`) tags. Our menu will have 4 links to start, so let's create it after the body tag, with each element enclosed within a list(`<li>`) tag. :

```html
<html>
  <!-- creating head tag-->
  <head>
    <title>[Project name]</title>
  </head>
  
  <!-- creating body tag -->
  <body>
    <!-- creating a menu list -->
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Our Tech</li>
          <li>Contact</li>
        </ul>
      </div>
  </body>
</html>
```

In the end, you may want to add more pages, but this is the bare minimum required for your projects.

Our links need to be clickable, so we need to surround them with 'a' tags. You'll see how this works later. Surround each link with an 'a' tag:
```html
<ul>
  <li><a>Home</a></li>
  <li><a>About</a></li>
  <li><a>Our Tech</a></li>
  <li><a>Contact</a></li>
</ul>
```
Our menu still does nothing we can see yet, but we will come back to this after we create our page sections. 


Creating Page Wrapper
======

The next step is to create a page wrapper, which "wraps" the content within its own section, aside from the menu and rest of the page. This is done by using division, or div, tags. Div tags need differentiation, so usually a class or id is attached to it to do this. They are functionally the same, but are used differently. IDs are only used once, while classes can be used more than once. Since we will ony have one page wrapper, an id is appropriate here. You will see the difference when you use classes later. To attach an id or class to a tag, simply type the type and value within the opening tag. You can name your ids and classes as you like, they just need to be consistent in CSS. Create a page wrapper div after the menu list with an id of "page-wrapper":

```html
<html>
  <!-- creating head tag-->
  <head>
    <title>[Project name]</title>
  </head>
  <!-- creating body tag -->
  <body>
    <!-- creating a menu list -->
    <ul>
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Our Perks</a></li>
      <li><a>Contact</a></li>
    </ul>
    <!-- creating wrapper for entire page -->
    <div id="page-wrapper">
    </div>
  </body>
</html>
```

Creating Page Sections
======
We are ready to create our page sections now. Our first section is the home section, so create a div with an id of "home" within the page wrapper div. Don't forget to properly indent and close your tags:
```html
<div id="page-wrapper">
  <div id="home"></div>
</div>
```

Let's finish creating our other sections while we're at it. Put space between each section so it is less confusing when building out sections. Add ids of the respective sections as well:
```html
<div id="page-wrapper">
  <div id="home"></div>
  
  
  <div id="about"></div>
  
  
  <div id="perks"></div>


  <div id="contact"></div>


  <div id="footer"></div>
</div>
```

Adding Page Section Content
======
Let's start adding to our section. Add headings using the h1 tag for each respective section. Your home section heading will simply be the name of your project:
```html
  <div id="home">
    <h1>[Project Name/Title]</h1>
  </div>
  
  
  <div id="about">
    <h2>About</h2>
  </div>
  
  
  <div id="perks">
    <h2>Our Perks</h2>
  </div>
  
  
  <div id="contact">
    <h2>Contact</h2>
  </div>
```

First let us add a Title(<h1>) and subtitle(<h4>) to our page. Create a new div tag under the home tag and place your h1 and h4 elements inside. Give them the class 'title' and 'subtitle', respectively. This will tell the user what the page they ended up in has to offer:
<div id="home" class="full-width text-center">
    <!-- Title -->
    <div class="intro">
        <h1 id="title">{Your Title Here}</h1>
        <h4 id="sub-title">Welcome to my first website!</h4>
    </div>
</div>

Notice that we have a sub section in our home div. now we can manipulate that sub section as a group by way of the 'intro' class.
We have also added classes 'full-width and text-center' to the home section, we will revisit those in our css section.



Let's jump to the "about" section. Before we start, let's create a team sub-section to place a little information about our team. We will be adding a div for the "team-section" row, which will include a photo, photo title and blurb.

For now, create an empty div with an id of "team-section":
```html
<div id="about">
  <h2>About</h2>
  <div id="team-section"></div>
</div>
```

You will now add an team image, image title, and blurb. We will give our images class names. Remember ids can only be used once, so we will use class names for our team information. 
We have data that will contain only words or single lines of text(photo title), so 'span' tags are used for that instead of divs. Code inside the team section:
```html
<div id="about">
  <h2>About</h2>
  <div id="team-section">
      <img class="team-photo" src="[url/address of your image]">
      <br><span class="team-photo-title">[Image Title/Optional]</span>                                
      <p class="team-photo-blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
      </p>
  </div>
</div>
```

We will learn how to add images that will eventually be our logo. Open a new tab, and quickly find an image in a Google search, this will be replaced later. Right-click or Ctrl-click(Macs) and click "Copy Image Url" or "Copy Image Address", depending on your browser.

Go back to your codepen, and add an img tag after the home section. We will be pasting the image url onto the "src" attribute to the img tag, and give it an id of "home-logo":
```html
<img class="team-photo" src="[url/address of your image]"/>
```

Next lets move down to the Contact section of our page and add a simple button which we will later use to give the user a way to contact us: 
```html
<div id="contact">
  <h2>Contact</h2>
  <button>Contact Me</button>
</div>
```

You should now see your image. Now that you understand how ids and classes work, we will make our menu clickable. We want each menu link to go to its respective page section, so we will reference each id. To make a link reference an id, we add a hashtag in front of the name of the id, and set the 'href' attribute of the 'a' tag to it. For example, to make a link referencing the "home" id, we add an 'href' attribute to the link's 'a' tag, and set it equal to '#home' like this:
```html
<a href="#home">Home</a>
```
We will add a class to our ul element for styling
Do this for all of your menu links, and it should be:
```html
    <div id="top-menu">
      <!-- creating a menu list -->
      <ul class="link-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#perks">Our Perks</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
```

Your links are now clickable, but the page looks horrible. We will now use css to style the page!

CSS Tab
======
Slide out your css tab and begin adding code.  The first thing we'll style is the menu. We will give it a background color, width and padding for spacing. CSS references ids the same way HTML does: hashtags. The format of CSS is element, curly braces, then styling rules. Your rules will be within open and closed curly braces {}. It will look like this:

```css
#top-menu {
  width: 100%;
  background: #343a40;
  padding-top: 15px;
  padding-bottom: 15px;
}
```

We need to make our links appear in a straight line, so add rules to do so. We will use nested rules, meaning we need to tell CSS these things are nested. We simply indicate the element we want to reference after its parent. For example, we have 'li' elements within the menu, and 'a' elements within that 'li'. Let's first tell CSS to display our links in a straight line:
```css
#top-menu li{
  display: inline;
}
```

This is cool, but we need more space between links. Give it a left margin of 50px and while we are at it, let remove the extra padding on the left side of the list:
```css
#top-menu li{
  margin-left: 50px;
  display: inline;
}

#top-menu ul {
  list-style: none;
  padding: 0;
}

```
Now let's remove the underline and change the color of our links to another color. Text-decoration removes the underline by setting the value to 'none':
```css
#top-menu li a{
  text-decoration: none;
  color: rgb(0, 149, 255);
}
```

Be sure to keep your CSS in order, so we will work backwards to add style to our page itself now. Let's make our text font 'Sans-serif, and remove the annoying border(margin) around your page with this CSS code(add this to the top of your CSS file)
```css
html, body {
  font-family: sans-serif;   
  margin: 0; 
}
```

To see separation in the pages, for every other section, add a background color. In our case, the about and contact pages are going to be the offsets. We will keep it simple by adding a light gray color. Instead of typing "light gray", we will use denote the color using a code. Pay close attention:

```css
#home{
  background-color: #800000;
  color: #ffffff;
}
#perks{
  background-color: #02AAB0;
  color: #ffffff;
}
#footer {
  color: #fff;
  background: #343a40;
  <!-- add this padding for spacing -->
  padding-top: 40px;
  padding-bottom: 40px;
}
```
Hex colors start with a hashtag, followed by a 6-digit hexadecimal number. Here are some useful links:

https://color.adobe.com/create/color-wheel/
https://mycolor.space/
https://www.rapidtables.com/web/color/RGB_Color.html


Now add padding to the bottom of our headings to create a cleaner look:
```css
h2 {
  margin-bottom: 40px;
}
```

We will now style the remaining classes. To style classes in CSS, use a dot(.) instead of the hashtag(#). Let's give our page sections a minimum height so they aren't cluttered together, some padding to separate them from each other and center align its contents add class="content-section" to the about/perks/contact sections:
```css
.contentSection {
  min-height: 200px;
  padding: 80px;
  text-align: center;
}
```

Set your team photo height and width for a more uniform look:
```css
.team-photo {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 40px;
}
```

Then lets style our h1 and h4 intro elements in the home section by using a combination selector: 
```css
.intro h1 {
  font-size: 60px;
  padding-top: 200px;
  margin-top: 0px;
}

.intro h4 {
  font-weight: 300;
}
```

Finally lets add a few classes that we might use frequently when styling our page (ex: 'full-width' and 'text-center' classes we used in our home section):
```css
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
```

Your HTML page should now look like this:

```html
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>[Project name]</title>
  </head>
  <body>
    <div id="top-menu">
      <ul>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#perks">Our Perks</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
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
          <div id="team-section">
              <img class="team-photo" src="[url/address of your image]">
              <br><span class="team-photo-title">[Image Title/Optional]</span>                                
              <p class="team-photo-blurb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
              </p>
          </div>
      </div>
      <div id="perks" class="contentSection">
        <h2>Our Perks</h2>
      </div>
      <div id="contact" class="contentSection">
        <h2>Contact</h2>
        <button>Contact Me</button>
      </div>
      <div id="footer"></div>
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
}

#perks p {
  color: rgba(255, 255, 255, 0.90);
}

#top-menu {
  width: 100%;
  background: #343a40;
  padding-top: 15px;
  padding-bottom: 15px;
}

#top-menu ul {
  list-style: none;
  padding: 0;
}

#top-menu li {
  display: inline;
  margin-left: 50px;
}

#top-menu li a { 
  color: rgb(0, 149, 255);  
  text-decoration: none;    
}

#top-menu li a:hover { 
  color: grey;
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

.team-photo {
  max-width: 600px;
  width: 100%;
  height: auto;
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 40px;
}

.intro h1 {
  font-size: 60px;
  padding-top: 200px;
  margin-top: 0px;
}

.intro h4 {
  font-weight: 300;
}
```

Voila! You have a basic skeleton of an HTML & CSS page with a menu, headings, images, links, and styles. This is all you need to house your landing page. If you feel you want a more challenging task, proceed to check out the HTML & CSS II lab.

Feel free to Google concepts that you either you are having trouble with, or desire to learn more information about. A great website to use to learn more about the topics discussed in class:<br>
**https://www.w3schools.com/**
<br>
Simply go here, search a specific topic, and you'll find detailed explanations and examples of all the topics that were discussed today.
For Further Information to build on top of this lesson you can go to the following two links:
**https://www.freecodecamp.org/**
**https://www.codecademy.com/**
