$(document).ready(function(){
    var ratings = 4.1;
    var starTotal = 5;
    var starPercentage = ratings / starTotal * 100;
    var star = starPercentage+'%';
    $(".stars-inner").width(star);
});