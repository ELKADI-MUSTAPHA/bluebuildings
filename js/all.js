function toggleLink() {
  $("#ulList").toggleClass("toggle-it");
  $("#socials").toggleClass("toggle-it");
  $(".header").toggleClass("fixed-header");
}

window.setTimeout(function () {
  $(".anim.one").addClass("scale-it");
}, 500);
window.setTimeout(function () {
  $(".anim.two").addClass("scale-it");
}, 700);
window.setTimeout(function () {
  $(".anim.three").addClass("scale-it");
}, 900);

// $(document).ready(function(){
window.setTimeout(function () {
  $("#loader").addClass("hide-it");
}, 3000);
// });
