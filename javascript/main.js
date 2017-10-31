var newGame = {
  player1: new Player(),
  indexRandom: 0,
  questionGenerated: '',
  questionSelected: []
};

function selectRandomNumber (){
  var random = Math.floor(Math.random() * (10 - 0)) + 0;
  if (newGame.questionSelected.indexOf(random) !== -1) {
    selectRandomNumber();
  } else {
    newGame.indexRandom = random;
    newGame.questionSelected.push(random);
  }
}

function generateQuestion (){
  newGame.questionGenerated = new Question(newGame.indexRandom);
}

function questionSetUp(){
newGame.questionGenerated.shuffleAnswers(newGame.indexRandom);
$('#question').html(newGame.questionGenerated.pregunta);
$('#1').html(newGame.questionGenerated.respuestas[0]);
$('#2').html(newGame.questionGenerated.respuestas[1]);
$('#3').html(newGame.questionGenerated.respuestas[2]);
$('#ranking').html(newGame.player1.ranking);
$('#value').html(newGame.player1.value());
$('#top').html(newGame.player1.rankingTop());
$('#bot').html(newGame.player1.rankingBottom());
}

function questionFactory(){
  selectRandomNumber();
  generateQuestion();
  questionSetUp();
}
questionFactory();

function rankUpdate(selectAnswer) {
  if (newGame.questionGenerated.selectAnswer(selectAnswer) == true) {
    newGame.player1.rankUp();
  } else {
    newGame.player1.rankDown();
  }
}

$('.btn').click(function(){
  rankUpdate($(this).html());
  $('#ranking').html(newGame.player1.ranking);
  $('#value').html(newGame.player1.value());
  $('#top').html(newGame.player1.rankingTop());
  $('#bot').html(newGame.player1.rankingBottom());
  questionFactory();
});
