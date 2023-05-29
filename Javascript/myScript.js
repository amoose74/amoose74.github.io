let red, green, blue;
function reappear() {
    document.getElementById('block').style.display = 'block';
    var redRGB = getRandInt(0 , 255);
    var blueRGB = getRandInt(0 , 255);
    var greenRGB = getRandInt(0 , 255);
    document.getElementById('block').style.backgroundColor = 'rgb('+redRGB+','+greenRGB+','+blueRGB+')';
}
function disappear() {
    document.getElementById('block').style.display = 'none';
}
function getRandInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getName() {
    let text;
    let userName = prompt("Enter ya name bozo", "Squiggle Face");
    if (userName == null || userName == "") {
        text = "Mate, I said enter ya name";
    }
    else {
        alert("Really?? Ya parents named ya " + userName + "??")
        text = "Really?? Ya parents named ya " + userName + "??";
    }
    document.getElementById("text").innerHTML = text;
}
function changeColour(colourVal) {
    let inputValue = document.getElementById(colourVal).value;
    if (!isNaN(inputValue) && inputValue < 256 && inputValue >= 0)
    {
        switch(colourVal)
        {
            case "red":
                red = inputValue;
                break;
            case "green":
                green = inputValue;
                break;
            case "blue":
                blue = inputValue;
                break;    
        }
    }
    else
    {
        document.getElementById(colourVal).style.backgroundColor = 'red';
    }
    if (red != null && blue != null && green != null)
    {
        document.getElementById('block').style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    }
}
