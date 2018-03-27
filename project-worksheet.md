# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

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


## POST MVP

Include the full list of features that you are considering for POST MVP

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

There is no winning or losing per say, there is successful and unsuccessful. Players can keep playing to earn more tips and improve their knowledge of cocktails.

### Game Reset
The user can reset at anytime, leave the gake and return to continie levels and earn more money.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 jQuery

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
