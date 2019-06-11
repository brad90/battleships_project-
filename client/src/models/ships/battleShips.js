const PubSub = require('../../helpers/pub_sub.js')
const  BattleShip = function(type, hitpoints){
  this.type = type
  this.hitPoints = hitpoints,
  this.coordinates = []
}

const battleShip = new BattleShip

BattleShip.prototype.succesfulHitToShip = function () {

  if (this.hitPoints === 1 ){
    PubSub.publish("Battleship: ship-has-been-sunk-payload-ship-type", this.type)
    return this.hitPoints -= 1
   }
  return this.hitPoints -= 1
};

module.exports = BattleShip;
