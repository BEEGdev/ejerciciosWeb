// Acceder al DOM
const hw = document.querySelector("#hw");//boton hw
const colors = document.querySelector("#colors"); //botón colores
const noColors = document.querySelector("#noColors"); //botón parar colores
const time = document.querySelector("#time") //botón para la hora
const noTime = document.querySelector("#noTime") //botón parar hora
const clocks = document.querySelector("#clocks") //botón para los relojes
const noClocks = document.querySelector("#noClocks") //botón parar relojes
const boxes = document.getElementsByClassName("now")//div de relojes
const content = document.querySelector("#contenido") //div principal


//listeners
hw.addEventListener("click",helloWorld); 
colors.addEventListener("click",changeColors); 
noColors.addEventListener("click",changeColors); 
time.addEventListener("click",showCurrentTime); 
noTime.addEventListener("click",showCurrentTime); 
clocks.addEventListener("click",toggleClocks); 
noClocks.addEventListener("click",toggleClocks); 

//booleanos
let isColorChange = false;
let isTimeRunning = false;
let isClocksVisible = false;

//variables para intervalos
let colorInterval;
let timeInterval

//variables para tiempo
    let now;
    let hours;
    let minutes;
    let seconds;

function helloWorld(){
    content.innerHTML = "Hello World!"
}

function changeColors(){
    let backgrounds = ["rgb(223, 129, 6)","rgb(6, 28, 199)","rgb(6, 199, 54)","rgb(108, 182, 202)", "rgb(202, 108, 108)"]
    let i = 0;
    isColorChange = !isColorChange;

    if(isColorChange){
        if (!isTimeRunning) content.innerHTML ="COLOREEEES";
        colorInterval= setInterval(() => {
            content.style.backgroundColor= backgrounds[i];
            i>4 ? i=0 : i++ ;
        }, 1000);

        colors.hidden = true;
        noColors.hidden = false;
    }
    else{
        if (!isTimeRunning) content.innerHTML = "Saludos, profesor";
        clearInterval(colorInterval);
        content.style.backgroundColor= "rgb(202, 108, 108)";
        colors.hidden = false;
        noColors.hidden = true;
    }
        
}

function showCurrentTime(){
    content.innerHTML = "Sacando reloj";

    isTimeRunning = !isTimeRunning;

    
    if(isTimeRunning){

        timeInterval= setInterval(() => {
            now = new Date(Date.now());
            hours = now.getHours();
            minutes = now.getMinutes();
            seconds = now.getSeconds();
            content.innerHTML = `${hours} : ${minutes} : ${seconds}`
            toggleClocks(false);
        }, 1000);

        time.hidden = true;
        noTime.hidden = false;
    }
    else{
        clearInterval(timeInterval);
        content.style.backgroundColor= "rgb(202, 108, 108)";
        content.innerHTML ="Saludos, profesor"
        time.hidden = false;
        noTime.hidden = true;
        toggleClocks(false);
    }
}

function toggleClocks(isToggle = false){
    console.log(isToggle==true);
    if(isToggle!=false) isClocksVisible=!isClocksVisible;

    if(isTimeRunning){
        for (let i=0; i<4;i++){
            boxes[i].innerHTML= `${hours} : ${minutes} : ${seconds}`
        }
    }
    else{
        for (let i=0; i<4;i++){
            console.log(2)
            boxes[i].innerHTML= "¿Llego tarde?";
        }
    }
    
    if (isClocksVisible){
        for (let i=0; i<4;i++){
            boxes[i].style.visibility = "visible";
            boxes[i].style.height= "6rem";
        }
        clocks.hidden=true;
        noClocks.hidden=false;
        }

    else{

        for (let i=0; i<4;i++){
            boxes[i].style.visibility = "hidden";
            boxes[i].style.height= "0rem";
        }
        clocks.hidden=false;
        noClocks.hidden=true;
    }
}