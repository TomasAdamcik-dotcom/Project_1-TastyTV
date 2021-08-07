# TastyTV project

---

## The Project brief

Company'TastyTV' is lanching online tv show live streaming and need a website to present their business.
Full project brief available [here.](https://docs.google.com/document/d/1qGlMeesgE4X4n4XjRT_8b_scOuI4E2VREpSwqyOmvUw/edit#)

---

## User stories

- As a TV streaming service we want to create a 12 hours repeating stream so that we can help people discover movies and TV shows
- As a business we want to show regular announcements so that customers know about our new services
- As a TV streaming service we want to show stream programming for next few days so that customers can check themselves
- As a business we want to display information about the company so that customers can find us
- As a business we want to show links to our social accounts on our website so that customers can follow us on social media
- As a TV show streaming provider we want to provide our customers option to register so that we can provide them recommendations for TV shows streaming
- As a registered customer I want to see recommendation for random tasty movie tv show so that I have new idea about what to watch

User stories on Miro board available [here.](https://miro.com/app/board/o9J_l9fwBok=/)
![User Stories](http://tomasadamcik.com/Bootcamp/1.%20Project%201%20-%20Tasty%20TV/User%20Stories.JPG)

---

## Wireframes

![Wireframes](http://tomasadamcik.com/Bootcamp/1.%20Project%201%20-%20Tasty%20TV/Wireframes%20v2.JPG)

---

## Used technologies

- CSS
- Flexbox
- Grid
- HTML
- Javascript

---

## Taken approach

1.  User stories- Based on project brief, I summarised stories and listed them on Miro dashboard. Each user story was highlighted red in order to show status (red = not done, green = implemented). User stories were then split into 4 different groups as per page are they going to be on.
2.  Wireframes - I created wireframes of header and footer and then for each of the four pages. I made sure that all components of user requests were included in those wireframes. I also added notes to each wireframe to remind myself what functionality or characteristics I want to implement into the page
3.  I found a color palette for a website to make sure I will be using consistent colors for all website components and started applying CSS and flexbox to header and footer.
4.  After creating header and footer, I created HTML for remaining pages and applied CSS, flexbox and grid to each of them to make sure they appear on website as planned. During this stage I slightly amended wireframes of header, on demand and about us page
5.  To create registration form, I set up queryselectors for input form and submit button:
    - added eventlistener, that will run after clicking of submit button
    - using if function, I added email address validation to check if email is in the correct format. If not, user gets propt to enter a valid address.
    - if customer entered valid email address script continues to generate recommendation to user.
6.  Recomendation for registered users:
    - I entered card without content under submit form and made it invisible by setting CSS to "display: none;"
    - I created object (array of arrays) for all tv shows and saved them all into array called allSeries
    - Created random number generator that returns values from zero to size of array
    - Then used queryselector to pass values of object to HTML of suggested show
    - made empty card that now contains data of suggested series visible by changing "display: " property in CSS
7.  Into suggestions, I added functionality, where customer can get another suggestion of series in case they don't like the one generated
8.  In Streaming-now section I added script that will change streaming series according to current time:

- I created object of arrays that contained information I want to change about series such as Title, image, and some description
- Added method that returns current hour in a day
- using eventlistener, upon loading the page, script will run throught multiple if statements and will place the correct series into the HTML

---

## Next development

- Make HTML code for header and footer reusable
- when clicking on a card in "on demand" page, it should open a streaming window
- better responsiveness for small devices

---

### Links

1. This webite is hostet at [Netlify](https://csb-wcw60.netlify.app/)
2. Link to the repository at [Github](https://github.com/TomasAdamcik-dotcom/Project_1-TastyTV.git)
3. See my Miro board [here.](https://miro.com/app/board/o9J_l9fwBok=/) for the following information:

- Project brief
- User stories
- Wireframes
4. Website presentation available [here](https://docs.google.com/presentation/d/18hI1ws3YTXWLts5xR4CWyrrDdq9kAI12mvUfDb7_MM8/edit?usp=sharing) to view only.

---

## List of known issues

- there is a chance that personalised sugeestion will generate the same TV show that it generated before, as the logic suggests based on random number not excluding current series from the set
