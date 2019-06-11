const PubSub = require('../helpers/pub_sub.js')

const Overlay = function(container){
  this.container = container
}


Overlay.prototype.bindEvents = function () {
  this.renderOverlayOpen()
  this.renderOverlayClose()
};

Overlay.prototype.renderOverlayOpen = function () {

  PubSub.subscribe("Battleship: ship-has-been-sunk-payload-ship-type", (event) => {
    const shipType = event.detail

    const closeButton = document.createElement('button')
    closeButton.id = "closeButton"
    closeButton.textContent = "CLOSE"

    const youSunkShipType = document.createElement('h1')
    youSunkShipType.id = "youSunkShipType"
    youSunkShipType.textContent = `Enemy ${shipType} has been destroyed`

    this.container.classList.remove('visibility')

    this.container.appendChild(youSunkShipType)
    this.container.appendChild(closeButton)
  })
};

Overlay.prototype.renderOverlayClose = function () {
  document.addEventListener('click', (event) =>{
    this.container.classList.add('visibility')
    this.container.innerHTML = ''
  })
};



module.exports = Overlay;
