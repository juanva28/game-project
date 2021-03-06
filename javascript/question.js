var Question = function(index){
  this.pregunta = questions[index].pregunta;
  this.respuestaCorrecta = questions[index].respuesta[0];
  this.respuestas=[];
};

Question.prototype.shuffleAnswers = function(index){
  var shuffleAns = _.shuffle(questions[index].respuesta);
  this.respuestas = shuffleAns;
};

Question.prototype.selectAnswer = function(clickedAnswer){
  if(clickedAnswer == this.respuestaCorrecta){
    return true;
  }
  else{
    return false;
  }
};
