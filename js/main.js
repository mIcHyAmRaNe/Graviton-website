var menuButton = document.getElementsByClassName("button");
var menu = document.getElementById("mainNav");
var menuHeight = menu.clientHeight;
var sections = document.getElementsByClassName("pageBlock");
var device = device.default;

for (var i = 0; i < menuButton.length; i++) {
  menuButton[i].addEventListener("click", function() {
    var pageLocation = this.getElementsByTagName("a")[0].getAttribute("href");
    pageLocation = pageLocation.replace("#","");
    location.hash = pageLocation;
  });
}

window.addEventListener("scroll", function(e) {
  var scrollPos = document.getElementsByTagName("html")[0].scrollTop;
  var windowTop = scrollPos + menuHeight;
  var currentSection;
  var previousSection;
  for (var i = 0; i < sections.length; i++) {
    var secPos = sections[i].offsetTop;
    if (windowTop >= secPos) {
      currentSection = sections[i]
    }
  }
  var id = currentSection.getAttribute("id")
  for (var i = 0; i < menuButton.length; i++) {
    menuButton[i].classList.remove("active");
  }
  document.querySelector("[rel="+id+"]").classList.add("active");
});
