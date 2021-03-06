  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var cells = document.getElementsByTagName("TD") //grabs each table data cell individually

var randomIndex = Math.floor(Math.random() * cells.length)  //picks a random cell depending on the length of the cells variable

var randomCell = cells[randomIndex]   

var mole = document.createElement('img');
mole.src = './mole.PNG'
mole.id = "mole"
randomCell.appendChild(mole);

mole.onclick = whackedMole

function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomIndex]
  randomCell.appendChild(mole);
  var audio = new Audio("whack-audio.wav");
  audio.play();  
}
