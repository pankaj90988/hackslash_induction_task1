function btn(){
    let currentMode="white";
    if(currentMode=="white"){
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    document.querySelector(".main-container").style.backgroundColor="black";
    document.querySelector(".main-container").style.color="white";
    document.querySelector("body").style.backgroundColor="black"; 
    document.querySelector(".sub-cont-1").style.color="white";
    document.querySelector("a").style.backgroundColor="white";
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
    document.querySelector(".main-container").style.color="black";
    document.querySelector("body").style.backgroundColor="white";
    }
}


