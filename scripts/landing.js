//var animatePoints = function() {
  // var points = document.getElementsByClassName('point');

var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point) {
       point.style.opacity = 1;
       point.style.transform = "scaleX(1) translateY(0)";
       point.style.msTransform = "scaleX(1) translateY(0)";
       point.style.WebkitTransform = "scaleX(1) translateY(0)";
};

 
var animatePoints = function(points) {
    forEach(points, revealPoint);  

};

 window.onload = function() {
     
    // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     
    // alert("The window has loaded!");
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
    //console.log(event);
    //console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });   
     
 }