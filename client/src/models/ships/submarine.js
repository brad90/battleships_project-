const  Submarine = function(coordinates){
  this.type = "Submarine"
  this.hitPoints = 2,
  this.coordinates = []
}

Submarine.prototype.succesfulHitToShip = function () {

  if (this.size !== 0 ){
      return this.size -= 1}
  console.log("you sunk my battleship")
};

module.exports = Submarine;
