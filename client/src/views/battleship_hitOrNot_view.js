const PubSub = require('../helpers/pub_sub.js')

const HitOrMiss = function (){
};


HitOrMiss.prototype.bindEvents = function () {

  PubSub.subscribe("newGame: succesful-hit", (event)=>{
    const coordinate = event.detail
    this.explosion(coordinate)
  });

  PubSub.subscribe("newGame: succesful-fail", (event) => {
    const coordinate = event.detail
    console.log(coordinate);
    this.miss(coordinate)
  });

};

HitOrMiss.prototype.explosion = function (guess) {
  const gridBox = document.querySelector(`#${guess}`)
  const explosion = document.querySelector('#audio-explosion')
  gridBox.classList.remove('visibility')
  explosion.play()

};

HitOrMiss.prototype.miss = function (guess) {
  const gridBox = document.querySelector(`#${guess}`)
  const gridBoxParent = gridBox.parentNode
  gridBoxParent.classList.add('miss')
  console.log('hello');
};

module.exports = HitOrMiss;
