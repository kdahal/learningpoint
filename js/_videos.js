  $(function() {
    $('a.zoombox').zoombox();
     $('a.zoombox').zoombox({
   theme       : 'zoombox',        //available themes: 
                                   //zoombox,lightbox, prettyphoto, 
                                   //darkprettyphoto, simple
   opacity     : 0.8,              // Black overlay opacity
   duration    : 800,              // Animation duration
   animation   : true,             // Do we have to animate the box ?
   width       : 800,              // Default width
   height      : 600,              // Default height
   gallery     : true,             // Allow gallery thumb view
 });
  });


//----------------//

function myFunction() {
  document.getElementById("myVideo").poster = "images/world-video.jpg";
}
//---//


//---//
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//--//

