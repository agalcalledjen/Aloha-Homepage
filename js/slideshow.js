$(document).ready(function () {
  // Flickity Carousel
  $('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    autoPlay: 3000, // {Number}
    // advance cells ever {Number} milliseconds
    // 1500 will advance cells every 1.5 seconds
    prevNextButtons: false
  }); // end of Flickity carousel
}); // end of doc ready