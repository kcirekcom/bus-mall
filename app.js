'use strict';

var allProducts = [];

//Place all 15 products objects into a constructor.
function Products(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

//Place all 15 into an array
new Products('bag', './img/bag.jpg');
new Products('banana', './img/banana.jpg');
new Products('bathroom', './img/bathroom.jpg');
new Products('boots', './img/boots.jpg');
new Products('breakfast', './img/breakfast.jpg');
new Products('bubblegum', './img/bubblegum.jpg');
new Products('cthulhu', './img/cthulhu.jpg');
new Products('dog-duck', './img/dog-duck.jpg');
new Products('dragon', './img/dragon.jpg');
new Products('pen', './img/pen.jpg');
new Products('pet-sweep', './img/pet-sweep.jpg');
new Products('scissors', './img/scissors.jpg');
new Products('shark', './img/shark.jpg');
new Products('sweep', './img/sweep.png');
new Products('tauntaun', './img/tauntaun.jpg');
new Products('unicorn', './img/unicorn.jpg');
new Products('usb', './img/usb.gif');
new Products('water-can', './img/water-can.jpg');
new Products('wine-glass', './img/wine-glass.jpg');
//display products in console
console.log(allProducts);

//Generating random array for the three images that will apear on the page at any given time.
var randomNumArray = [];

function threeRandomNumbers() {
  randomNumArray = [];
  //For every random number generated it will be multiplied by the 18 products above so that it can be pushed into the random array above.
  randomNumArray.push(Math.floor(Math.random() * allProducts.length)); //[0]
  randomNumArray.push(Math.floor(Math.random() * allProducts.length)); //[1]
  //If both random number arrays equal to one another array[1] will be generated again to reach a different outcome.
  while (randomNumArray[0] === randomNumArray[1]){
    console.log('duplicate detected with second element.');
    randomNumArray[1] = (Math.floor(Math.random() * allProducts.length));
  }
  randomNumArray.push(Math.floor(Math.random() * allProducts.length)); //[2]
  //if duplicate detected another random number will be generated
  while (randomNumArray[1] === randomNumArray[2] || randomNumArray[0] === randomNumArray[2]){
    console.log('duplicate detected with third element.');
    randomNumArray[2] = (Math.floor(Math.random() * allProducts.length));
  }
  console.log(randomNumArray);
}

//a function to display all three images on the page
function displayThreeImages(){
  threeRandomNumbers();
  //left
  var left = document.getElementById('left');
  left.src = allProducts[randomNumArray[0]].filepath;

  //center
  var center = document.getElementById('center');
  center.src = allProducts[randomNumArray[1]].filepath;

  //right
  var right = document.getElementById('right');
  right.src = allProducts[randomNumArray[2]].filepath;
}

function handleEventClick(event) {
  event.preventDefault(); //don't need it right??

  //make code for when user clicks on image 1, 2, or 3

  var leftClick = event.target.left.value;
  var centerClick = event.target.center.value;
  var rightClick = event.target.right.value;
  if (!event.target.left.value || event.target.center.value || event.target.right.value) {
    alert('You need to click on a picture!');
  }
}
// =======.addEventListener('click', handleEventClick); ???

displayThreeImages();
