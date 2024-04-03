const Button = document.getElementById("Button");
let currentMode = "white";
function changeMode(){
    
    if(currentMode==="white"){
    document.body.style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    document.querySelector(".main-container").style.backgroundColor="black";
    document.querySelector(".main-container").style.color="white";
    document.querySelector(".sub-cont-1").style.backgroundColor="black";
    document.querySelector(".future").style.color="white";
    document.querySelector(".Pointer").style.color="white";
    document.querySelector("a").style.color="white";
    currentMode = "black";
    }
    else{
        document.body.style.backgroundColor="white";
        document.querySelector(".main-container").style.backgroundColor="white";
    document.querySelector(".main-container").style.color="black";
    document.querySelector(".sub-cont-1").style.backgroundColor="white";
    document.querySelector("body").style.backgroundColor="white"; 
    document.querySelector(".sub-cont-1").style.color="black";
    document.querySelector(".future").style.color="black";
    document.querySelector(".Pointer").style.color="black";
    document.querySelector("a").style.color="black";
    currentMode = "white";
    }
}
changeMode.addEventListener("click", Button);


