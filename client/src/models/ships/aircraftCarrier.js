const  AircraftCarrier = function(coordinates){
  this.type = "Aircraft Carrier"
  this.hitPoints = 4,
  this.coordinates = []
}


AircraftCarrier.prototype.succesfulHitToShip = function () {

  if (this.size !== 0 ){
      return this.size -= 1}
  console.log("you sunk my battleship")
};


module.exports = AircraftCarrier;
