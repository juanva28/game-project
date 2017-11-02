
var speedPersonaje = 0.5;
var scientist = new Personaje(100, 470, speedPersonaje);
var fps = 60;

var interval = setInterval(function() {
  scientist.updatePosition();
}, 1000/fps);

var newGame = {
  player1: new Player(),
  indexRandom: 0,
  questionGenerated: '',
  questionSelected: [],
  triesLeft: questions.length-1,
};

function selectRandomNumber() {
  var random = Math.floor(Math.random() * (10 - 0)) + 0;
  if (newGame.questionSelected.indexOf(random) !== -1) {
    selectRandomNumber();
  } else {
    newGame.indexRandom = random;
    newGame.questionSelected.push(random);
  }
}

function generateQuestion() {
  newGame.questionGenerated = new Question(newGame.indexRandom);
}

function questionSetUp() {
  newGame.questionGenerated.shuffleAnswers(newGame.indexRandom);
  $('#question').html(newGame.questionGenerated.pregunta);
  $('#1').html(newGame.questionGenerated.respuestas[0]);
  $('#2').html(newGame.questionGenerated.respuestas[1]);
  $('#3').html(newGame.questionGenerated.respuestas[2]);
  $('#value').html(newGame.player1.value());
  $('#top').html(newGame.player1.rankingTop());
  $('#bot').html(newGame.player1.rankingBottom());
  $('#topFlag').attr("src", newGame.player1.topFlag());
  $('#botFlag').attr("src", newGame.player1.bottomFlag());
  $('#countDown').html(newGame.triesLeft);

}

function scaleUpdate() {
  var variable = Math.ceil(newGame.player1.ranking);
  for(var j = 1; j <= 39; j++) {
    $('.nivel:nth-last-child(' + j + ')').css("background", "rgb(255, 229, 117)");
  }
  for (var i = 1; i <= variable; i++) {
    $('.nivel:nth-last-child(' + i + ')').css("background", "rgb(0, 183, 173)");
  }
}

function getTriesLeft(){
  return (questions.length-1)-newGame.questionSelected.length;
}


function questionFactory() {
  selectRandomNumber();
  generateQuestion();
  questionSetUp();
  scaleUpdate();
  newGame.triesLeft = getTriesLeft();
}
questionFactory();

function rankUpdate(selectAnswer) {
  var position = $('#top-marker').css("bottom");
  var positionValue = parseInt(position.substring(0,position.length-2));
  var newPosition = 90;
  if (newGame.questionGenerated.selectAnswer(selectAnswer) == true) {
    newGame.player1.rankUp();
    newPosition = positionValue + 7.5;
    $('#top-marker').css("bottom", newPosition+'px');
    $('.displayValueUP').css("color", "green");
  } else {
    newGame.player1.rankDown();
    if(newGame.player1.ranking % 1 == 0){
      newPosition = positionValue - 7.5;
      $('#top-marker').css("bottom", newPosition+'px');
    }
    $('.displayValueUP').css("color", "red");
  }
  // $('#top-marker').css("bottom", newPosition+'px');
}


$('.btn').click(function() {
  rankUpdate($(this).html());
  $('#value').html(newGame.player1.value());
  $('#top').html(newGame.player1.rankingTop());
  $('#bot').html(newGame.player1.rankingBottom());
  scientist.stopAndTalk();
  questionFactory();
  if (newGame.questionSelected.length >= questions.length) {
    alert("YOU LOST!");
  }
  if (newGame.player1.value() > 1 / (coins[38].value)) {
    alert("YOU WON");
  }
});
