document.onmousemove = () => {
   var x = event.offsetX;
   var y = event.offsetY;
   document.body.style.backgroundPositionX = -x + "px";
   document.body.style.backgroundPositionY = -y + "px";
}

const dialBienvenue = document.getElementById('dialBienvenue').innerHTML;
const buttonNext = document.getElementById('buttonNext').innerHTML;
