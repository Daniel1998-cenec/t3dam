//Alumno:Daniel Cesar
//Fecha: 26/04/2023
'use strict';


//Variable que use para pintar los saludos
var colorfuente= "white";
//defino un array con colores, tipo costante
const colores=[];
colores[0]="green";
colores[1]="blue";
colores[2]="red";
colores[3]="yellow";
colores[4]="brown";

//solo para vuestro conocimiento, diferentes manera de declarar.
const colores2= ["green","blue","red","yellow","brown"]

//Este seria el mas indicado de usar.
const colores3= new Array ("green","blue","red","yellow","brown");

const colores4= new Array(3);
colores4[0]="green";
colores4[1]="blue";
colores4[2]="red";
colores4.push="yellow";
colores4.push="brown";

//funcion que sirve para mostrar el comentario dentro del cuadrado. 
function saludar(identificador){
    let elem=document.getElementById(identificador)
    elem.style.color=colorfuente;
    elem.innerHTML="hola";
    colorfuente=getComputedStyle(elem).backgroundcolor;
}

function pintar(){
    //Sirve para elegir elementos a pintar y colores

    for(let x = 1; x <= colores.length; x++) {
        let ident="c"+x;
        let cf= colores[x-1];
        rellenar(ident,cf);
    }

}
    
function rellenar(identificador, colorfondo){
    //sirve para pintar un cuadrito
    let elem=document.getElementById(identificador)
    elem.style.backgroundcolor=colorfondo;
}
pintar();