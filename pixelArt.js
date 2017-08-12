document.addEventListener("DOMContentLoaded", function() {

  function colorGrabber(event)
  {
    var current = document.getElementsByClassName('pink')
    var currentColor = document.createElement("div");

    var myId = event.target.style.backgroundColor;
    current.style.backgroundColor = currentColor;

  }
  function colorAllocator(event)
  {






  }

  function divAdder()
  {
    var pixelContainer=document.createElement("div");
    pixelContainer.setAttribute("id", "pixelContainer");
    document.body.appendChild(pixelContainer);
    var colorPallet=document.createElement("div");
    colorPallet.setAttribute("id", "colorPallet");
    colorPallet.addEventListener("click", colorGrabber);

    for(var i=0; i<704; i++)
    {

      var id="divId";
      var element=document.createElement("div");
      element.style.height = "30px";
      element.style.width = "30px";
      element.style.border = "1px solid black"
      element.style.cssFloat = "left"
      element.style.display = "inline-block"
      pixelContainer.appendChild(element);
    }

      function handler(event) {
        event.target.classList.add(".pink")

      }

      var colorPallette = document.createElement('div');
      colorPallette.id = "colorBoard";
     document.body.appendChild(colorPallette);

     for (i=0; i<6; i++) {
       var color = document.createElement('div');
       color.style.width='50px';
       color.style.height='50px';
       color.style.border='5px solid black';
       color.style.display='inline-block';
       color.style.cssFloat='left';
       color.style.borderRadius='25px';
       colorPallette.appendChild(color);
     }
  }

























  divAdder();



});
