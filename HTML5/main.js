//creo una función que se ejecutara cuando hago click en el boton (id)
function muestra_oculta(params) {
     //declaro la función y paso por parametro el sector de referencia que quiero ocultar/mostrar 
     let div= document.getElementById(id); 
     //uso el condicional IF para saber si el DIV esta oculto (Display; none) o si es visible
if (div.style.display=="none") {
    div. style.display="flex";
 } 
 else {
div.style.display="none" ;
}
}

  