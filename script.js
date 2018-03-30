$(document).ready(function() {

// declaring JQuery variables
// ======================================================
  const $card = $('#card')
  const $cardBack = $('.back');
  const $cardFront = $('.front')
  const $button = $('#submit-button');
  const $landingPage = $('#landing-page');
  const $gameBoard = $('#game-board');
  const $pantryBoard = $('#pantry-board');
  const $timer = $('#timer');
  const $timerTwo = $('#timerTwo');
  const $welcomeMessage = $('#welcome-message');
  const playerName = $('#name-input');
  const player = $('#player');
  const $answer = [];
  const $pantryBox = $('.pantry-box');
  const $cardAnswer = [1, 2, 3];
// ======================================================
// resuable functions
// tried storing some reusable functions but kept breaking my code
// =======================================================
// Hidden pages and elements
// =======================================================
  $gameBoard.hide();
  $pantryBoard.hide();
  $cardBack.hide();
// =======================================================
// player name and game start
// =======================================================
  player.submit(function(e){
     e.preventDefault();
     $landingPage.fadeOut('slow/1000/slow', function() {
    });
      $gameBoard.fadeIn('slow/1000/slow', function() {
    });
      $welcomeMessage.append(`Hello ${playerName.val()} you will have 5 seconds to remember the ingredients, click the cocktail when you're ready!`);
  });
// =======================================================
// click event (toggle) on CardFront to change the image to cardBack and trigger countdown
// =======================================================
$("#card").click(function(){
  $cardFront.toggle();
  $cardBack.toggle();
// =======================================================
// timer for gameBoard
// =======================================================
  let counter = 5;
  let interval = setInterval(function() {
    counter--;
    $timer.html(counter);
    if (counter === 0) {
      $timer.html('Time is up!');
      clearInterval(interval);
// =======================================================
// switches to the pantryBoard when the timer runs out
// =======================================================
      $gameBoard.fadeOut('slow/1000/slow', function() {
      });
      $pantryBoard.fadeIn('slow/1000/slow', function() {
// ======================================================
// timer for pantryBoard
// ======================================================
          let counter = 10;
          let interval = setInterval(function() {
          counter--;
          $timerTwo.html(counter);
          if (counter === 0) {
          $timerTwo.html('Time is up!');
          clearInterval(interval);
    }
}, 1000);
// =======================================================
// Click event on pantry boxes
// =======================================================
          $pantryBox.click(function(){
          $answer.push($pantryBox)
          $pantryBox.html()
          console.log($answer)
          });
      });
// =======================================================
    }
}, 1000);
});
// =======================================================
// Game Logic
// =======================================================
// if ($answer === $cardAnswer){
//   console.log("correct!");
// }else{
//   console.log("You were wrong");
// }
console.log($cardAnswer)


});
