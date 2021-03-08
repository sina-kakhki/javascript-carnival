  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

var uni0 = document.getElementById("uni0").onclick = clicked
var uni1 = document.getElementById("uni1").onclick = clicked
var uni2 = document.getElementById("uni2").onclick = clicked

var inflation = [0, 0, 0]

function clicked(event) {
    var unicorn = event.target
    var id = unicorn.id[3]        //gets the number of the unicorn, 3 refers to the 4th character in unicorn id which is the number of the unicorn.
       
        inflation[id]++

        if (inflation[id] == 4)
        inflation[id] = 0

        unicorn.src = "./images/unicorn-" + inflation[id] + ".png"  
}
//alert("Thank You!");
