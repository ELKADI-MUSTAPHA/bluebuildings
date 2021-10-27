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
function hideWts (){
  if (window.innerWidth <= 700) {
    window.setTimeout(function () {
      $(".span-wts").addClass("hide-it2");
    }, 7000);
  }
}


// onscroll wtsp
whatsapp = document.getElementById("whatsapp");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    whatsapp.className = "whatsapp show"
  } else {
    whatsapp.className = "whatsapp hide"
  }
};

window.addEventListener("scroll", myScrollFunc);

// ==================== lazy load image
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

function myFunction () {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction3 () {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    btnText.innerHTML = "SHOW LESS"; 
    moreText.style.display = "block";
  } else {
    btnText.innerHTML = "SHOW MORE"; 
    moreText.style.display = "none";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "اقرأ المزيد"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "إخفاء"; 
    moreText.style.display = "inline";
  }
}