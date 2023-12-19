# Ozart: UX/UI Designer portfolio

https://moonamee.github.io/Ozart-Landing-Portfolio/

![Screenshot 2023-10-12 110940](https://github.com/Moonamee/Ozart-Landing-Portfolio/assets/116831065/ce0cbf9e-5ddd-4588-9939-5bb49ed850db)

Desktop / Tablet / Mobile

This site is a portfolio of a UX/UI designer,
product designer, content creator and creative
director. The site contains sections that present
information about the designer, her skills and
experience. The homepage has a welcome area with a
photo of the designer and a brief description of
her skills.

The site is described as follows:

1. Site header: Logo, which is a link to the
home page. A search button, which when clicked
opens a field for entering a query. A navigation
menu that contains "Home", "About me",
"Presents" and "Contacts" sections.

2. The main part of the site: A header area
containing a welcome and information about the
designer. A photo of the designer.

3. Social Media: Icons to access the designer's
social media profiles.

4. About me section: A short video about the
designer.

5. "What I Do" section: A block describing the
designer's three areas of expertise: 'Ui & UX
Design', 'Graphic Design' and 'Web Development'.

6. Portfolio: Filters to select a category of
work. Gallery with images of projects.

7. Client Testimonial section: Client
testimonial about the designer's work.

8. Get in touch section: A headline and
description encouraging to get in touch with the
designer. A "Contact" button to go to the
contact form. Designer's Social Media.

9. "My Blog" section: Section Title. Blog post
cards with date, number of comments, likes,
author and brief description.

10. Footer: Information about the designer and
how to contact the designer. Copyright and link
to the template author. Designer's Social Media.

# JavaScript

Code that performs various actions on a web
page. Here is its explanation:

1. "$(".popup").css("display", "none");" - Sets
the initial value of the CSS "display" property
for an element with class "popup" as "none",
which hides it initially.

2. Burger menu button click handler: Adds a
burger-menu button click event handler. When the
button is clicked, toggles the "active" class
for button and menu, which allows animating the
display and hiding of the menu.

3. Handler for clicking on an image in the
portfolio gallery: Adds an image click handler
inside an element with class
"portfolio-gallery-box". When clicking on an
image, gets its source path and sets it to the
"src" attribute of the image inside the element
with class "popup". Then, using the "fadeIn()"
method, smoothly displays the element with the
class "popup".

4. handler for clicking on the close button of
the popup: $(".close").click(function () {
$(".popup").fadeOut(); }); Adds a click handler
to an element with class "close". When the close
button is clicked, using the "fadeOut()" method,
smoothly hides the element with class "popup".

5. Handler for clicking on the area around the
popup to close: $(".popup-wrap").click(function
() { $(".popup").fadeOut(); }); Adds a click
handler to an element with the class
"popup-wrap". When clicking on the area around
the popup, using the "fadeOut()" method,
smoothly hides the element with class "popup".

6. Function "toggleSearchInput()" to toggle the
display of the search field: Gets references to
elements with the classes "search_input" and
"search_img". When the function is called,
checks the current value of the CSS "display"
property for the search field. If it is equal to
"block", it hides the search field and removes
the "clicked" class from the element with the
"search_img" class. If the value is not equal to
"block", it displays the search box and adds the
"clicked" class to the element with the
"search_img" class.

7. A click handler outside the search field to
hide it: Adds a click handler to the document.
When clicked outside the search field and
element with class "search_img", hides the
search field and removes the "clicked" class
from the element with class "search_img".

This code is responsible for the functionality
of the popup, burger menu, portfolio gallery and
search field on the web page.
