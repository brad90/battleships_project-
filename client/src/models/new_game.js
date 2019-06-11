const Battleship = require('./ships/battleShips.js')
const PubSub = require('../helpers/pub_sub.js')


const NewGame = function(){};


const battleShip1 = new Battleship('Battleship1', 3);
const battleShip2 = new Battleship('Battleship2', 3);
const destroyer1 = new Battleship('Destroyer1', 3);
const destroyer2 = new Battleship('Destroyer2', 3);
const submarine = new Battleship('Submarine', 2);
const aircraftCarrier = new Battleship('AircraftCarrier', 4);

const NavalFleet = [battleShip1, battleShip2, destroyer1, destroyer2, submarine, aircraftCarrier]
let assignedCoordinates =[];

const newGame1 =  new NewGame

NewGame.prototype.bindEvents = function () {

};

NewGame.prototype.newGameToBePlayed = function () {

  this.assignNewCoordinatesToShipNewGame()

  let value = false
  while(value === false){
    for(i=0; i < assignedCoordinates.length; i++){
      if(assignedCoordinates.includes(assignedCoordinates[i + 1]) === true){
        assignedCoordinates = []
        this.assignNewCoordinatesToShipNewGame()
      }
    }
    value = true
  }
};


NewGame.prototype.assignNewCoordinatesToShipNewGame = function(){

  let letters = ['a','b','c','d','e','f','g','h','i','j']

  NavalFleet.forEach(function (element) {
    element.coordinates =[]
  });

  for(let i=0; i < NavalFleet.length; i++){
    let alreadyAssignedLetters = []
    let alreadyAssignedNumbers = []

    if (i%2 === 0){

      let evenNumberTrue__false = false
      while(evenNumberTrue__false === false){

        let coordinateLetterVertically = letters[this.randomNumber() -1]
        let coordinateNumberVertically = this.randomNumber()
        let newCoordinateVertically = coordinateLetterVertically + coordinateNumberVertically

        if (coordinateNumberVertically + NavalFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateVertically) === false){
          let value = 0
          alreadyAssignedLetters.push(coordinateLetterVertically)
          while(value < NavalFleet[i].hitPoints ){
            newCoordinateVertically = coordinateLetterVertically + coordinateNumberVertically
            NavalFleet[i].coordinates.push(newCoordinateVertically)
            assignedCoordinates.push(newCoordinateVertically)
            coordinateNumberVertically += 1
            value += 1
          }
          evenNumberTrue__false = true;
        }
      }
    }else{
      let oddNumberTrue__False = false

      while(oddNumberTrue__False === false){

        let coordinateLetterHorizontal = letters[this.randomNumber() -1]
        let coordinateNumberHorizontal = this.randomNumber()
        let indexOfLetterHorizontal = letters.indexOf(coordinateLetterHorizontal)
        let newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal

        if (indexOfLetterHorizontal + NavalFleet[i].hitPoints < 10 && assignedCoordinates.includes(newCoordinateHorizontal) === false){
          alreadyAssignedNumbers.push(coordinateNumberHorizontal)
          oddNumberTrue__False = true;
          let value = 0
          while(value < NavalFleet[i].hitPoints ){
            newCoordinateHorizontal = letters[indexOfLetterHorizontal] + coordinateNumberHorizontal
            NavalFleet[i].coordinates.push(newCoordinateHorizontal)
            assignedCoordinates.push(newCoordinateHorizontal)
            indexOfLetterHorizontal += 1
            value += 1
          }
        }
      }
    }
  }
};


NewGame.prototype.randomNumber = function () {
  const randomValueNumber = Math.floor(Math.random() * 10 + 1)
  return randomValueNumber;
};

NewGame.prototype.randomLetter = function () {
  let gridLetters = ['a','b','c','d','e','f','g','h','i','j'];
  const randomValueLetter = this.randomNumber();
  const randomLetter = gridLetters[randomValueLetter -1 ];
  return randomLetter;
};


NewGame.prototype.playerGuessInput = function() {
  PubSub.subscribe("BattleShipFormView:User-input-ready", (event) => {
    const coordinate = event.detail;
    console.log(event.detail);
    NavalFleet.forEach(function(ship){
      if(ship.coordinates.includes(coordinate)){
        PubSub.publish("newGame: succesful-hit", coordinate)
        ship.succesfulHitToShip()
      }else{
        PubSub.publish("newGame: succesful-fail", coordinate);
      }
    })
    console.log(NavalFleet);
  })
};



// NewGame.prototype.explosion = function (guess) {
//   const gridBox = document.querySelector(guess)
//   gridBox.classList.add('visibility')
// };



module.exports = NewGame;
