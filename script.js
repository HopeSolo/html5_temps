var canvas, cxt;

window.onload = function() {
    canvas = document.querySelector("#myCanvas");
    cxt = canvas.getContext('2d');
    
    cxt.font = "20pt Verdana";
    
    cxt.fillRect(20, 20, 30, 30);
    cxt.fillText("Hello Canvas!", 70, 70);
    

};