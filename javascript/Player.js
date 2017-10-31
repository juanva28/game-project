var Player = function(){
this.ranking = 14;
// this.rankingTop = coins[Math.floor(this.ranking)+1].nombre;
// this.rankingBottom = coins[Math.floor(this.ranking)].nombre;
// this.value = (coins[Math.floor(this.ranking)+1].value + coins[Math.floor(this.ranking)].value)/2;
};

Player.prototype.rankUp = function(){
  this.ranking++;
};

Player.prototype.rankDown= function(){
  this.ranking -= 0.5;
};

Player.prototype.rankingTop = function(){
  return coins[Math.floor(this.ranking)+1].nombre;
};

Player.prototype.rankingBottom = function(){
  return coins[Math.floor(this.ranking)].nombre;
};

Player.prototype.value = function(){
  return 1/((coins[Math.floor(this.ranking)+1].value + coins[Math.floor(this.ranking)].value)/2);
};
