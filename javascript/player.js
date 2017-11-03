var Player = function(){
this.ranking = 14;
};

Player.prototype.rankUp = function(){
  this.ranking++;
};

Player.prototype.rankDown= function(){
  this.ranking -= 0.5;
};

Player.prototype.rankingTop = function(){
  return coins[Math.ceil(this.ranking)+1].nombre;
};

Player.prototype.rankingBottom = function(){
  return coins[Math.ceil(this.ranking)].nombre;
};

Player.prototype.value = function(){
  return (1/((coins[Math.ceil(this.ranking)+1].value + coins[Math.ceil(this.ranking)].value)/2)).toFixed(4);
};
Player.prototype.topFlag =function(){
  return coins[Math.ceil(this.ranking)+1].img;
};
Player.prototype.bottomFlag =function(){
  return coins[Math.ceil(this.ranking)].img;
};
