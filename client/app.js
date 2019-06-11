

const BattleShipForm = require('./src/views/battleship_form_view.js');
const BattleShipNewGame = require('./src/models/new_game.js');
const HitOrMiss = require('./src/views/battleship_hitOrNot_view.js');
const Overlay = require('./src/views/battleship_ship_overlay_page.js');



document.addEventListener('DOMContentLoaded', () => {

  const userInput = document.querySelector("#input-coordinates")
  const battleShipForm = new BattleShipForm(userInput)
  battleShipForm.bindEvents()

  const hitOrMiss = new HitOrMiss()
  hitOrMiss.bindEvents()

  const overlayContainer = document.querySelector('#overlay')
  const overlay = new Overlay(overlayContainer)
  overlay.bindEvents()

  const water = document.querySelector("#audio-water")


  const battleShipNewGame = new BattleShipNewGame ()
  battleShipNewGame.newGameToBePlayed()
  battleShipNewGame.playerGuessInput()
})
