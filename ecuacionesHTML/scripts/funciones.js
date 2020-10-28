
var numero="";
function calculaNumero(){
let x1=0;
let x2=0;
a=document.getElementById("a").value; //recuperamos el valor de entrada de la fecha
b=document.getElementById("b").value;
c=document.getElementById("c").value;
if(suma(a,b,c) < 0){
    numero="Las soluciones son números imaginarios";
    agregaResultado();
}else{
let s=Math.sqrt(suma(a,b,c));
    x1=(-b+s)/(2*a);
    x2=(-b-s)/(2*a);
    numero="X1="+x1+"x2="+x2;
    agregaResultado();
}
}
function suma(a, b, c){   //recibe una cadena de dígitos y los suma
let res=0;
 res=pow(b,2)-4*a*c;
 return res;
}

function agregaResultado(){  //agrega un párrafo para mostrar el resultado

   // resultado=document.createElement("p") //creamos un elemento de tipo p
    texto=document.createTextNode(numero); //creamos el texto de contenido
    resultado.appendChild(texto); //agregamos el contenido al elemento span

    seccion=document.getElementsByTagName("section")[0]; //obtenemos el pirmer elemento section

    seccion.appendChild(resultado); //agregamos el span al elemento section

}