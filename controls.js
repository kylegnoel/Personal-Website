
// $(document).on('click', 'ul li', function(e) {
//     e.preventDefault();
//     $(this).addClass('active-year').siblings().removeClass('active-year');
// });

// var allEvents = document.querySelectorAll(".event");

// document.getElementById('btn-2001').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2001').classList.add("active-event");
// });

// document.getElementById('btn-2005').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2005').classList.add("active-event");
// });

// document.getElementById('btn-2012').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2012').classList.add("active-event");
// });

// document.getElementById('btn-2014').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2014').classList.add("active-event");
// });

// document.getElementById('btn-2016').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2016').classList.add("active-event");
// });

// document.getElementById('btn-2018').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2018').classList.add("active-event");
// });

// document.getElementById('btn-2019').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2019').classList.add("active-event");
// });

// document.getElementById('btn-2020').addEventListener('click', function(){
//     allEvents.forEach(function(el) {
//         el.classList.remove("active-event");
//     })
//     document.getElementById('event-2020').classList.add("active-event");
// });
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
        && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
    }


var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.rating-percentage');


function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        let percentage = document.getElementsByClassName('rating-percentage');
        for (var i = 0; i < percentage.length; i++) {
        percentage[i].style.width = percentage[i].getAttribute('data-done');
        }
      }
    });
  
    scroll(loop);
}


loop();