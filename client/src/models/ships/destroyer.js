const  Destroyer = function(coordinates){
  this.type = "Destroyer"
  this.hitPoints = 2,
  this.coordinates = []
}


Destroyer.prototype.succesfulHitToShip = function () {

  if (this.size !== 0 ){
      return this.size -= 1}
  console.log("you sunk my battleship")
};


module.exports = Destroyer;
