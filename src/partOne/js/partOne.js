//I parte, cambiar color y texto a darkblue

function changeColor(){
    const backgroundElement = document.getElementById("background");
if(backgroundElement){
  backgroundElement.style.backgroundColor ="darkblue";
}
};

function changeText(){
    const textElement =document.getElementById("text");
    if (textElement){
   textElement.innerHTML="darkblue";
    }
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}