$(document).ready(function() {

  // ======================================================
  // declaring JQuery variables
  // ======================================================
  const $card = $('#card');
  const $cardBack = $('.back');
  const $cardFront = $('.front');
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
  const $pantryArray = ['vodka', 'sugar', "ice", 'gin', 'lemon', 'lime', 'mango', 'mint', 'orange', 'cointreau', 'rosemary', 'tequila', 'strawberry', 'basil', 'chilli' ];
  const $answer = [];
  const $cardAnswer = [];
  const $shaker = '<img src= images/shaker.png>';
  const $correct = $('#correct');
  const $wrong = $('#wrong');
  const $reload = $('#try-again');

  // ======================================================
  // resuable functions
  // ======================================================
  function pantryClick(box) {
    box.on('click', function(e) {
       $answer.push($(this).data('ingredient'))
       box.prepend($shaker);
       // box.off();
       $answer.sort();
       console.log($answer);
    });
}

function isEqual(userAnswer, cardAnswer){
  for(let i=0; i< $cardAnswer.length; i++ ){
  }
  for(let i=0; i < $answer.length; i++){
  }
  if(userAnswer.toString() === cardAnswer.toString()){
    $correct.show();
  }else if(userAnswer.toString() !== cardAnswer.toString()){
    $wrong.show();
  }
};


  // =======================================================
  // Hidden pages and elements
  // =======================================================
  $gameBoard.hide();
  $pantryBoard.hide();
  $cardBack.hide();
  $correct.hide();
  $wrong.hide();

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
  $card.off()
  // loop through pantryArray 6 times
  for(let i=0; i<4; i++){
  // push random index to cardAnswer
  $cardAnswer.push($pantryArray[Math.floor(Math.random()*$pantryArray.length)]);
  }
  $welcomeMessage.text(`Remember the ingredients!`);
  $cardAnswer.sort();

  // =======================================================
  // appending images to cardBack
  // =======================================================
  $cardAnswer.forEach((item, i) => {
    if(item === 'vodka'){
      let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-one')
      $cardBack.append(div);
  }else if(item === 'sugar'){
      let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-two')
      $cardBack.append(div);
  }else if(item === 'ice'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-three')
      $cardBack.append(div);
  }else if(item === 'gin'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-four')
      $cardBack.append(div);
  }else if(item === 'lemon'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-five')
      $cardBack.append(div);
  }else if(item === 'lime'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-six')
      $cardBack.append(div);
  }else if(item === 'mango'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-seven')
      $cardBack.append(div);
  }else if(item === 'mint'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-eight')
      $cardBack.append(div);
  }else if(item === 'orange'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-nine')
      $cardBack.append(div);
  }else if(item === 'cointreau'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-ten')
      $cardBack.append(div);
  }else if(item === 'rosemary'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-eleven')
      $cardBack.append(div);
  }else if(item === 'tequila'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-twelve')
      $cardBack.append(div);
  }else if(item === 'strawberry'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-thirteen')
      $cardBack.append(div);
  }else if(item === 'basil'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-fourteen')
      $cardBack.append(div);
  }else if(item === 'chilli'){
    let div = $('<div></div>')
      $(div).attr('id', 'pantry-box-fifteen')
      $cardBack.append(div);
  }
  })

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
$reload.on('click', function(event) {
  event.preventDefault();
  location.reload();
  /* Act on the event */
});

});
