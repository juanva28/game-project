function Personaje(x, y, speed){
  this.x = x;
  this.y = y;
  this.direction = 0;
  this.speed = speed;
  this.element = $("#scientist");
  this.element.css({top:this.y, left:this.x, position:"absolute"});
  this.isMoving= true;
}

Personaje.prototype.directionChange = function(){
  if(this.x>=400){
    this.direction = 1;
  }if(this.x<=50){
    this.direction = 0;
  }
};

Personaje.prototype.moveRight = function(){
    if(this.direction == 0){
    this.x += this.speed;
    this.element.css({top:this.y, left:this.x, position:"absolute"});
    this.element.removeClass('economistleft');
    this.element.addClass('economistRight');
  }
};

Personaje.prototype.moveLeft = function(){
if(this.direction == 1){
    this.x -= this.speed;
    this.element.css({top:this.y, left:this.x, position:"absolute"});
    this.element.removeClass('economistRight');
    this.element.addClass('economistleft');
  }
};

Personaje.prototype.updatePosition = function(){
if (this.isMoving) {
  scientist.directionChange();
  scientist.moveRight();
  scientist.moveLeft();
}
};


Personaje.prototype.stopAndTalk = function(){
  this.isMoving = !this.isMoving;
  if(this.direction ==1){
    this.element.removeClass('economistleft');
    this.element.addClass('economistLeftStill');
    $('#scientist .left').css('display', 'inherit');
    $('#scientist .textLeft').css('display', 'inherit');
  }else{
    this.element.removeClass('economistRight');
    this.element.addClass('economistRightStill');
    $('#scientist .right').css('display', 'inherit');
    $('#scientist .textRight').css('display', 'inherit');
  }
  var that = this;
  setTimeout(function(){that.isMoving = !that.isMoving;
    if(that.direction==1){
      that.element.removeClass('economistLeftStill');
      that.element.addClass('economistleft');
      $('#scientist .left').css('display', 'none');
      $('#scientist .textLeft').css('display', 'none');
    }else{
      that.element.removeClass('economistRightStill');
      that.element.addClass('economistRight');
      $('#scientist .right').css('display', 'none');
      $('#scientist .textRight').css('display', 'none');
    }
}, 3000);
};
