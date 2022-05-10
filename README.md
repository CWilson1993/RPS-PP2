# Rock, Paper, Scissors

This was a project to create a game for someone to just enjoy or help them decide something. The game is something most people would have experienced as kids but online.

- __Published site available here: [Rock, Paper, Scissors!](https://cwilson1993.github.io/RPS-PP2/)__

![responsive-image](assets/docs/responsive_design.png)

## Features

### Exisiting Features
* #### Chosen Area
    * This is the first section on the page. 
    * It is blank at first but it is clear what the information is about.
    * Once the user makes their choice the computer makes a random choice and the result will populate.
    ![Chosen Area](assets/docs/chosen_section.png)

* #### Choice Area
    * This section is simple but the idea is to have clear hand images to represent the choices.
    * The user clicks the button of their choice which will start the game.
    * The chosen button changes colour so that the user knows which one has been picked.
    ![Choice Area](assets/docs/choices_buttons.png)

* #### Score Area
    * This section keeps track of who wins each round.
    * I wrote a JavaScript function which increments the score for whoever wins. If it is a draw then nothing changes.
    * The font colour of the scores is different so as to draw a clear distinction between who wins.
    ![Score Area](assets/docs/score_section.png)

* #### About Section
    * This section is just a little information for people who may have never played before.
    * It gives a brief idea of what the game can be used for and what the rules are.
    ![About Section](assets/docs/about_section.png)

* ### Features For Future Version
    * I would like to add two more game types, one where the user choice is random and the other would allow two users to play.
    * I will implement sounds for when a user wins or loses. 

*** 

## Technologies

* HTML
    * In this project I used HTML as the language which gave the main structure to the website.
* JavaScript
    * JavaScript was used in this project to create the functionality of the website.
* CSS
    * I used CSS to style my website in an appealing and accessible way.
* [GitHub](https://github.com/)
    * GitHub was used to host the website and store the code in a repository.
* [Stack Overflow](https://stackoverflow.com/)
    * I used Stack Overflow to help with any issues I found when doing the project.
* [Font Awesome](https://fontawesome.com/)
    * I used Font Awesome icons for the buttons in the choice section.
* [Google Fonts](https://fonts.google.com/)
    * Google fonts was used in the project to import the desired font.

## Testing

For the testing I applied several different methods.
* Responsiveness testing
    * I used Google Chrome dev tools to see what my site looked like on different screen sizes and also used [Responsive Design Checker](https://responsivedesignchecker.com/).
    * I sent the site to my family and friends to help me test it across different devices. Below are some of the results.
        * Xiaomi Redmi Note 10 Pro - no issues.
        * IPhone 12 - no issues.
        * Samsung Galaxy tablet - no issues.
        * Desktop 1920 x 1080 - no issues.

* Google Lighthouse
    * I used Google Lighthouse to measure the performance of the site on mobile and desktop screens.
    ![Lighthouse Mobile](assets/docs/mobile_lighthouse.png) ![Lighthouse Desktop](assets/docs/desktop_lighthouse.png)

* Online Validators
    * HTML 
        * The HTML code was run through the [W3C Validator](https://validator.w3.org/#validate_by_input) and returned no errors. [View report](assets/docs/html_validator.png).
    * CSS
        * For the CSS I ran it through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) and it returned zero errors. [View report](assets/docs/css_validator.png).
    * JavaScript
        * For the JavaScript code I ran it through [JSHint](https://jshint.com/) and it returned zero errors. 
        ![JSHint](assets/docs/js_validator.png)

## Deployment
* The site was deployed using GitHub pages. The steps are quite straightforward once you have a GitHub account and repository already set up:
* In the GitHub repository screen click the "Settings" section.
* Under "Code and automation" click the "Pages" part.
* On the next screen make sure the "Branch" is set to main and the folder is set to root, once done press the save button.
* Above the source section it will initially say "Your site is ready to be published", after a few minutes this should change to "Your site is published" it will also include the URL for your site.

## Credits

I'd like to thank Nishant Kumar and Kasia Bogucka for their help keeping me on the right track and guiding me.