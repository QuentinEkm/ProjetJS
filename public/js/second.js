//let bouton = document.getElementById("firstbutton");
//bouton.addEventListener("click", () => {
  //  document.body.style.backgroundColor = "blue";
//})



let bouton = document.getElementsByClassName("firstbutton")[0];
let counter = 0;

bouton.addEventListener("click", () => {
    if (counter === 0) {
        bouton.style.backgroundColor = "red";
        counter++;
    } else if (counter === 1) {
        bouton.style.backgroundColor = "white";
        counter++;
    } else {
        bouton.style.backgroundColor = "blue";
        counter = 0;
    }
  
    
})






function displayPhrase()
{
document.getElementById("magic").innerHTML = 'GET MESMERIZED GET MESMERIZED GET MESMERIZED GET MESMERIZED GET MESMERIZED GET MESMERIZED';
};

// document.querySelector("monabitch");
// monabitch.addEventListener("click", () => {
//     alert("YOU WILL NEVER HAVE MY SECRET");
// })


document.querySelector("monabitch");
monabitch.addEventListener("click", () => {
    window.open("https://www.louvre.fr/en");
})


document.getElementById("monarude").addEventListener("mouseover", mouseOver);
document.getElementById("monarude").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("monarude").innerHTML= "AND I AINT LEAVING THE PLACE! ";
}

function mouseOut() {
  document.getElementById("monarude").innerHTML = "IT'S MONA BITCH";
}

function myFunction() {
    document.getElementById("senses").style.font = "italic bold 20px arial,serif";
  }


  
function myFunction() {
  document.getElementById("senses").style.font = "italic bold 20px arial,serif";
}
  