const PubSub = require('../helpers/pub_sub.js')

const BattleShipInputForm = function(form){
  this.form = form;
}

BattleShipInputForm.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    event.preventDefault()
    const coordinates = event.target.coordinates.value
    PubSub.publish("BattleShipFormView:User-input-ready", coordinates)
    this.form.reset()
  })
};

PubSub.subscribe("Battleship: ship-has-been-sunk-payload-ship-type", (event) => {
  const battleShipType = event.detail
  console.log(battleShipType);
  const shipToRemove = document.querySelector('#'+ battleShipType)
  console.log(shipToRemove);
  shipToRemove.classList.add('visibility')
})



module.exports = BattleShipInputForm;
