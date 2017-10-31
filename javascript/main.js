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
  }
  else {
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

function scaleUpdate(){
  var variable = newGame.player1.ranking;
  for(var i = 0; i<= variable+1; i++){
    $('.nivel:nth-last-child('+ i +')').css("background", "white");
  }
}

function questionFactory(){
  selectRandomNumber();
  generateQuestion();
  questionSetUp();
  scaleUpdate();
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
  $('#value').html(newGame.player1.value());
  $('#top').html(newGame.player1.rankingTop());
  $('#bot').html(newGame.player1.rankingBottom());
  questionFactory();
  if(newGame.questionSelected.length>=questions.length) {
    alert("YOU LOST!");
  }
  if(newGame.player1.value()>1/(coins[38].value)){
    alert("YOU WON");
  }
});
