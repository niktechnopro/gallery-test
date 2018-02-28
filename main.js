var $gallery = $('.gallery');
var $galleryLeft = $('.gallery-left');
var $galleryRight = $('.gallery-right');

var images = [
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',

];

//main image setup
let $div = $('<div>');//creating an element
let $mainImage = $('<img>');//creating an element
var $target = $('.light-box');
$target.append($div)//.append($mainImage);
$div.append($mainImage);
$div.addClass('main-pic');
$mainImage.attr('src', '');//setting up initial main image
$mainImage.addClass('main-pic')
//end of main image setup

//event listener to close main image when clicking on div
$div.click(()=>{
  let displayProp = $target.css('display');
  // console.log(displayProp)
  if (displayProp == 'flex'){
    $target.css('display', 'none')
  }
  $galleryLeft.html('');//clearing left box
  $galleryRight.html('');//clearing right box
})
//end event listener to close main image

//function to populate images, aka = gallery
function createPic(i){
  var $pic = $('<img>'); //this is an element for individual image
  $pic.attr('src', images[i]);
  $pic.attr('list-index', i);
  $pic.addClass('pic');// add class list to image so we can style it
  $gallery.append($pic);
  $pic.on('click', clickImage);
  return $pic;
}
//end of function to populate images

//event listener function
function clickImage(event){ //using regular declaration to take advantage of hoisting
  // console.log(event);
  $galleryLeft.html('');
  $galleryRight.html('');
  let src = event.target.attributes[0].nodeValue; //src for main image
  let clicked = parseInt(event.target.attributes[1].value);
  $mainImage.attr('src', src );
  $target.css('display', 'flex');
  galleryLeftImages(clicked);
  galleryRightImages(clicked);
}

//populating left gallery
function galleryLeftImages(pictureIndex) {//populating left box
  console.log(pictureIndex);
  for (var i = pictureIndex - 1; i >= 0 && i >= pictureIndex - 5; i--) {
    var picLeft = createPic(i);
    $galleryLeft.append(picLeft);
  };
};
//end of populating left gallery

//populating right gallery
var galleryRightImages = function(pictureIndex) {
  console.log('gallery-right')
  for (var i = pictureIndex + 1; i < images.length && i <= pictureIndex + 5; i++) {
    var picRight = createPic(i);
    $galleryRight.append(picRight);
  };
};
//end of right gallery

// // here is some changed code
for (var i = 0; i < images.length; i++) {
  var pic = createPic(i);
  $gallery.append(pic);
};