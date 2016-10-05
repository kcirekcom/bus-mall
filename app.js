'use strict';

//change names to make more sense

var allProducts = [];

//Place all 15 products objects into a constructor.
function Products(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.timesDisplayed = 0;
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
new Products('sweep', './img/sweep.jpg');
new Products('tauntaun', './img/tauntaun.jpg');
new Products('unicorn', './img/unicorn.jpg');
new Products('usb', './img/usb.jpg');
new Products('water-can', './img/water-can.jpg');
new Products('wine-glass', './img/wine-glass.jpg');
//display products in console
console.log(allProducts);

var imgRandom = function () {
  return Math.floor(Math.random() * productImages.length);
};
var imageAppear = function(){
  var productImageOne = document.getElementById('imageOne');
  var productImageTwo = document.getElementById('imageTwo');
  var productImageThree = document.getElementById('imageThree');
  img1 = imgRandom();
  productImageOne.src = productImages[img1].filePath;
  productImages[img1].timesDisplayed ++;
  img2 = imgRandom();
  while (img1 === img2) {
    img2 = imgRandom();
  }
  productImageTwo.src = productImages[img2].filePath;
  productImages[img2].timesDisplayed ++;
  img3 = imgRandom();
  while (img1 === img2 || img2 === img3 || img3 === img1) {
    img3 = imgRandom();
  }
  productImageThree.src = productImages[img3].filePath;
  productImages[img3].timesDisplayed ++;
};
function button() {
  if(globalClicks < productImages.length) {
    document.getElementById('resultsButton').style.visibility = 'hidden';
  } else {
    document.getElementById('resultsButton').style.visibility = 'visible';
  }
}


//Generating random array for the three images that will apear on the page at any given time.
var randomImagesArray = [];

function threeRandomImages() {
  randomImagesArray = [];
  //For every random number generated it will be multiplied by the 18 products above so that it can be pushed into the random array above.
  randomImagesArray.push(Math.floor(Math.random() * allProducts.length)); //[0]
  randomImagesArray.push(Math.floor(Math.random() * allProducts.length)); //[1]
  //If both random number arrays equal to one another array[1] will be generated again to reach a different outcome. Caught and fixed.
  while (randomImagesArray[0] === randomImagesArray[1]){
    console.log('duplicate detected with second element.');
    randomImagesArray[1] = (Math.floor(Math.random() * allProducts.length));
  }
  randomImagesArray.push(Math.floor(Math.random() * allProducts.length)); //[2]
  //if duplicate detected another random number will be generated
  while (randomImagesArray[1] === randomImagesArray[2] || randomImagesArray[0] === randomImagesArray[2]){
    console.log('duplicate detected with third element.');
    randomImagesArray[2] = (Math.floor(Math.random() * allProducts.length));
  }
  console.log(randomImagesArray);
}

//a function to display all three images on the page
function displayThreeImages(){
  threeRandomImages();
  //left
  var left = document.getElementById('left');
  left.src = allProducts[randomImagesArray[0]].filePath;

  //center
  var center = document.getElementById('center');
  center.src = allProducts[randomImagesArray[1]].filePath;

  //right
  var right = document.getElementById('right');
  right.src = allProducts[randomImagesArray[2]].filePath;
}

function handleEventClick(event) {
  event.preventDefault(); //don't need it right??

  //make code for when user clicks on image 1, 2, or 3
  left.addEventListener('click', function(){
    handleClick(productImages[img1]);
  });
  center.addEventListener('click', function(){
    handleClick(productImages[img2]);
  });
  right.addEventListener('click', function(){
    handleClick(productImages[img3]);
  });
  //event listeners for the left, center, right images

  var leftClick = event.target.left.value;
  var centerClick = event.target.center.value;
  var rightClick = event.target.right.value;
  if (!event.target.left.value || event.target.center.value || event.target.right.value) {
    alert('You need to click on a picture!');
  }
}
// =======.addEventListener('click', handleEventClick); ???

displayThreeImages();
