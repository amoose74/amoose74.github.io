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