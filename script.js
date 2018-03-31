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
  const $pantryBox = $('.pantry-box');
  const $pantryOne = $('#pantry-box-one ');
  const $pantryTwo = $('#pantry-box-two ');
  const $pantryThree = $('#pantry-box-three ');
  const $pantryFour = $('#pantry-box-four ');
  const $pantryFive = $('#pantry-box-five ');
  const $pantrySix = $('#pantry-box-six ');
  const $pantrySeven = $('#pantry-box-seven ');
  const $pantryEight = $('#pantry-box-eight ');
  const $pantryNine = $('#pantry-box-nine ');
  const $pantryTen = $('#pantry-box-ten ');
  const $pantryEleven = $('#pantry-box-eleven ');
  const $pantryTwelve = $('#pantry-box-twelve ');
  const $pantryThirteen = $('#pantry-box-thirteen ');
  const $pantryFourteen = $('#pantry-box-fourteen ');
  const $pantryFifteen = $('#pantry-box-fifteen ');
  const $answer = [];
  const $cardAnswer = ["vodka", "sugar"];
  const $shaker = "<img src= images/shaker.png>";

// ======================================================
// resuable functions
// ======================================================
  function pantryClick(box){
       box.on('click', function(e) {
       $answer.push($(this).data('ingredient'))
       box.prepend($shaker);
       console.log($answer);
       box.off();
    });
}

function isEqual(value, other){
  for(let i=0; i< $cardAnswer.length; i++ ){
    if($answer[i] === $cardAnswer[i]){
    console.log("CORRECT!");
  }else if($answer[i] !== $cardAnswer[i]){
    console.log("YOU WERE WRONG!");
  }
  }
};


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
      $welcomeMessage.append(`Hello ${playerName.val()}, click the cocktail when you're ready!`);
    });

// =======================================================
// click event (toggle) on CardFront to change the image to cardBack and trigger countdown
// =======================================================
$card.on('click', function(){
  $cardFront.toggle();
  $cardBack.toggle();
  // $cardAnswer.push($(this).data('ingredient'))
  $card.off();
  $welcomeMessage.text(`Remember the ingredients!`);

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
          $pantryBox.off();
          $timerTwo.html('Time is up!');
          clearInterval(interval);
          isEqual($answer, $cardAnswer);
    }
}, 1000);


// =======================================================
// Click event on pantry boxes
// =======================================================
   pantryClick($pantryOne);
   pantryClick($pantryTwo);
   pantryClick($pantryThree);
   pantryClick($pantryFour);
   pantryClick($pantryFive);
   pantryClick($pantrySix);
   pantryClick($pantrySeven);
   pantryClick($pantryEight);
   pantryClick($pantryNine);
   pantryClick($pantryTen);
   pantryClick($pantryEleven);
   pantryClick($pantryTwelve);
   pantryClick($pantryThirteen);
   pantryClick($pantryFourteen);
   pantryClick($pantryFifteen);
  });

// =======================================================
    }
}, 1000);
});


});
