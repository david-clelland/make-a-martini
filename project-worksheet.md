# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  



|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Tue| Game Idea|
|Day 2: Wed| Wireframes and Priority Matrix| 
|Day 3: Thu| Pseudocode\actual code|   
|Day 4: Fri| Basic Clickable Model |  
|Day 5: Sat| Working Prototype |    
|Day 6: Sun| Game Completed / Slides |
|Day 7: Mon| Project Presentations |

## Project Description

Make a Martini (working title) is a learning and memory game challenging the user to remember ingredients after being shown a flash card with a visual/image recipe, after which the user has to remember and select the recipes from the subsequent "pantry"

## Wireframes
![You can't see the image](http://res.cloudinary.com/davidclelland/image/upload/v1522183123/IMG_0758.jpg)

![You can't see the image](https://res.cloudinary.com/davidclelland/image/upload/v1522183123/IMG_0757.jpg)


## Priority Matrix

Framework HTML/CSS to working/clickable site   
Game Logic
flipcard 
assessing correct selections
Styling CSS animations
Building out 'levels'


## MVP 
full clickable game with at least 1 level.
JQuery DOM manipulation
CSS transitions

## POST MVP

5 levels
Increasing difficulty
The choice of cocktail recipes or food recipes


## Game Components
1 User 'logs in'
2 User is give the opportunity for a 'test' round to demo the game
3 user is sent to the game board with cards set out
4 cards are shuffled and placed ontop of each other
5 player clicks on a card to flip card 
6 player has 5 seconds to memorize the keys and ingredients on the card
7 when the timer runs out the user is switched to the 'pantry' screen
8 user has 10 seconds to click on the ingredients from the card
9 depending on the time the user took to select the ingredients a tip is deposited in their tip jar
10 user is switched back to the game board
 return to position 5 ===> until cards run out
11  === $25            master mixologist
    < $25 && >= $15    mixologist
    < $15 && >= $5     dive bartender
    < $5               Don't give up your day job!

### Landing Page

The user will see a welcome message, styling predominantly done with images/illustrations

### Game Initialization 
After the user has input their name they will be initialized with a 'dummy round' a round to get them familiar with the images and the flow of the game...timing etc.

### Playing The Game

The user will see the flashcard for 5 seconds ==> the screen will then switch to the pantry board where the user has to select the correct ingredients according to the recipe with 10 seconds, the quicker the user is the higher the tipos they earn.

5 recipes per level ==>
level 1 = 3 ingredient recipes
level 2 = 4 ingredient recipes
level 3 = 5 ingredient recipes

### Winning The Game

Winning or losing is conditional on the money earned through time taken to select ingredients correctly. Players can keep playing to earn more tips and improve their knowledge of cocktails.

### Game Reset
The user can reset at anytime, leave the game and return to continue levels and earn more money.

## Functional Components

pantryClick() - function used to initiate 'pushing' the data to an array in order to compare to the question array and prepending an image to show the user it has been clicked. 

isEqual() - function created to compare two arrays after converting to strings and show relevant win lose logic


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |                 |
| Pseudo Code | H      | 10hrs | 12hrs | 12hrs |         |
| HTML & CSS  | L      | 3hrs  |       |                 | 2hrs
| DOM Manip   | H      | 16hrs |       |                 | 18hrs
| Game Logic  | H      | 16hrs |       |                 |
| Testing     | L      | 1hr   |       |                 |
| debugging   | H      | 2hrs  |       |                 | 4hrs

## Helper Functions

| Function | Description | 
| --- | :---: |  


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 jQuery

## Code Snippet

function pantryClick(box) {
    box.on('click', function(e) {
       $answer.push($(this).data('ingredient'))
       box.prepend($shaker);
       // box.off();
       $answer.sort();
       console.log($answer);
    });
    
 Sorting and pushing data from the ingredients was challenging, .sort() was utilized to correctly compare 2 arrays.

## jQuery Discoveries
.sort()
.fadeIn()
.fadeOut()

## Change Log
Multiple ingredients able to display: Could not overcome duplicate strings being stored into the cardAnswer array when
randomly selected, to accompany this I enabled multiple clicks on the answer board.

## Issues and Resolutions
Displaying Data through array indexes, seeked assistance from classmates
Making sure no duplicate ingredients are shown after Math.random(), not resolved, will have to shuuffle instead of using math.Random() and pick from beginning or end of array and then .pop() or .shift()


#### Play the game here
https://git.generalassemb.ly/pages/davidclelland/make-a-martini/

