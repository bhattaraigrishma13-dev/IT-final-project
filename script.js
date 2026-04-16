/* ===== Image Slider ===== */
var current = 0;

function changeSlide(n) {
  var slides = document.getElementById("slides");
  if (!slides) return;
  var total = slides.children.length;
  current = current + n;
  if (current < 0) current = total - 1;
  if (current >= total) current = 0;
  slides.style.transform = "translateX(-" + (current * 100) + "%)";
}

setInterval(function() { changeSlide(1); }, 3000);

/* ===== Form Validation ===== */
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all fields.");
    return false;
  }
  if (email.indexOf("@") == -1) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Message sent! Thank you.");
  return true;
}

/* ===== Page Navigation ===== */
var pages = ["index.html","menu.html","gallery.html","specials.html","about.html","contact.html","sitemap.html"];

function getCurrentIndex() {
  var current = window.location.pathname.split("/").pop();
  if (current === "" || current === "/") current = "index.html";
  for (var i = 0; i < pages.length; i++) {
    if (pages[i] === current) return i;
  }
  return 0;
}

function goToPage(direction) {
  var index = getCurrentIndex();
  var next = index + direction;
  if (next < 0) next = pages.length - 1;
  if (next >= pages.length) next = 0;
  window.location.href = pages[next];
}

/* ===== Swipe Support ===== */
var touchStartX = 0;

document.addEventListener("touchstart", function(e) {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e) {
  var diff = touchStartX - e.changedTouches[0].clientX;
  if (diff > 50) goToPage(1);
  if (diff < -50) goToPage(-1);
});
