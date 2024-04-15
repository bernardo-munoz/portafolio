let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("sql");
        habilidades[1].classList.add("mongodb");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("javascript");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("angular");
        habilidades[8].classList.add("figma");
        habilidades[9].classList.add("github");
        habilidades[10].classList.add("scrum");
        habilidades[11].classList.add("liderazgo");
        habilidades[12].classList.add("comunicacion");
        habilidades[13].classList.add("trabajoequipo");
        habilidades[14].classList.add("creatividad");
        habilidades[15].classList.add("dedicacion");
        habilidades[16].classList.add("trabajopresion");
        habilidades[17].classList.add("aprendizaje");
        habilidades[18].classList.add("solucionProblemas");
        habilidades[19].classList.add("etica");
        habilidades[20].classList.add("colaboracion");
        habilidades[21].classList.add("proactivo");
       
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 