var texto = document.getElementById("texto_linea");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, yf, xi, xf;
    var colorcito = "white";
    var espacio = ancho / lineas;
    
    for(l= 0; l < lineas; l++){
        yi = espacio * l;
        xf = espacio * (l+1);
        xi = espacio * l;
        yf = espacio * (l+1);
        dibujarLinea("yellow", 0, yi, xf, 300);
        dibujarLinea("yellow", xi, 0, 300, yf);
        dibujarLinea("red", 0, 300 - yi, xf, 0);
        dibujarLinea("red", xi, 300, 300, 300 - yf);
    }
    
    for(l= 0; l < lineas/2; l++){
        yi = espacio * l;
        xf = espacio * (l+1);
        xi = espacio * l;
        yf = espacio * (l+1);
        dibujarLinea("blue", xi, 150, 150, 150 - yf);
        dibujarLinea("orange", 150, yi, 150 + xf, 150);
        dibujarLinea("orange", xi, 150, 150, 150 + yf);
        dibujarLinea("blue", 150, 300 - yi, 150 + xf, 150);
    }
    
    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    dibujarLinea(colorcito, 1, 1, 299, 1);
    dibujarLinea(colorcito, 299, 1, 299, 299); 
}
