document.addEventListener("DOMContentLoaded", function() {

var currentColor = '';
// var current = document.getElementByClassName("current")[0];

function newColor () {
  currentColor = event.target.style.backgroundColor;
  // current.style.backgroundColor = currentColor;
}

//creates container for grid
    var pixelContainer=document.createElement("div");
    pixelContainer.setAttribute("id", "pixelContainer"); //** pixelContainer???

//grid
    for(var i=0; i<704; i++){
      var id="divId";
      var element=document.createElement("div");
      element.style.height = "30px";
      element.style.width = "30px";
      element.style.border = "1px solid black"
      element.style.cssFloat = "left"
      element.style.display = "inline-block"
      element.addEventListener('mouseenter', paint);
      element.addEventListener('click', clicker)
      document.body.appendChild(pixelContainer);
      pixelContainer.appendChild(element);
    }

    //pallette creation
     var colorPallette=document.createElement("div");
     var colorArr = ["blue", "red", "green", "black", "purple", "white"];
     for (j=0; j<colorArr.length; j++) {
       var color = document.createElement('div');
       color.style.backgroundColor=colorArr[j];
       color.style.width='50px';
       color.style.height='50px';
       color.style.border='5px solid black';
       color.style.display='inline-block';
       color.style.cssFloat='left';
       color.style.borderRadius='25px';
       color.addEventListener('click', newColor);
       colorPallette.appendChild(color);
       document.body.appendChild(colorPallette)
     }

     var mouseState = false;
     function clicker() {
       event.target.style.backgroundColor = currentColor || 'white';
     }

     function paint() {
       element.addEventListener('mousedown', function() {
         mouseState = true;
       });

       pixelContainer.addEventListener('mouseup', function(){
         mouseState = false;
       });

     if (mouseState === true) {
       event.target.style.backgroundColor = currentColor || 'white';
      }
     }
     function pixelHandler(event) {
       event.target.classList.add('filled');
     }
  })
