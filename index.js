var numberOfDrumButton = document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfDrumButton ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    console.log(this.style.color = "white") ;
});
    
}

// var audio = new Audio('sounds/crash.mp3');
//     audio.play();