//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor() {
    const backgroundElement = document.getElementById("background");

    if (backgroundElement.style.backgroundColor === "darkblue") {
        
        backgroundElement.style.backgroundColor = "red";
    } else {
        
        backgroundElement.style.backgroundColor = "darkblue";
    }
};

function changeText() {
    const textElement = document.getElementById("text");
    if (textElement.innerHTML === "red") {
        textElement.innerHTML = "darkblue";
    } else {
        textElement.innerHTML = "red";
    }
}
function changeStyles() {
    changeColor();
    changeText();
};

export { changeColor, changeText, changeStyles }