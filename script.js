$(document).ready(function() {

// resuable functions


// declaring JQuery variables
  const $cardBack = $('#backcard');
  const $cardFront = $('#frontcard')
  const $button = $('button');
  const $landingPage = $('#landing-page');
  const $gameBoard = $('#game-board');
  const $pantryBoard = $('#pantry-board');
  const $timer = $('#timer');
  const $name = $('#name');
  const $document = $('document');


  $gameBoard.hide();
  $pantryBoard.hide();

// click event on button to switch to game board
  $button.click(function() {
  $landingPage.fadeOut('slow/1000/slow', function() {
  });
  $gameBoard.fadeIn('slow/1000/slow', function() {
  });
});

// append back card image on game board


// click event on backcard to change the image to frontcard and trigger countdown
$cardBack.click(function(){
  let counter = 5;
  let interval = setInterval(function() {
    counter--;
    $timer.html(counter);
    if (counter === 0) {
      $timer.html('Time is up!');
      clearInterval(interval);
       // switches to the pantryBoard when the timer runs out
      $gameBoard.fadeOut('slow/1000/slow', function() {
      });
      $pantryBoard.fadeIn('slow/1000/fast', function() {

      });
    }
}, 1000);

});






// Pseudo Code
// Game Board/Recipe Card
// click event to turn card & start timer --- timer
// timer starts - 5 seconds
// when the 5 seconds is over screen switches to pantry board
// timer starts at 10 seconds and counts down
// if user clicks on the correct divs then user wins - push clicked elements to an array
// loop through the array
// if array includes div1 && div2 && div3 correct!


});
