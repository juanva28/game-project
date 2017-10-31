var Question = function(index){
  this.pregunta = questions[index].pregunta;
  this.respuestaCorrecta = questions[index].respuesta[0];
  this.respuestas=[];
};

Question.prototype.shuffleAnswers = function(index){
  var shuffleAns = _.shuffle(questions[index].respuesta);
  console.log(shuffleAns);
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


Question.prototype.deleteQuestion = function(index){
  questions.slice(index);
};
