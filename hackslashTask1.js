function btn(){
    let currentMode="white";
    if(currentMode=="white"){
    document.querySelector(".main-container").style.backgroundColor="black";
    document.querySelector(".main-container").style.color="white";
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("a").style.backgroundColor="white";
    }
    else{
        document.querySelector(".main-container").style.backgroundColor="white";
    document.querySelector(".main-container").style.color="black";
    document.querySelector("body").style.backgroundColor="white";
    }
}