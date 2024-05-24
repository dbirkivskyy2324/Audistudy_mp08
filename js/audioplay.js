var estat=false;


function reproductor() {
    if (estat==false) {
        document.getElementById("player").play();
        document.getElementById("lineart_effect2").style.animationPlayState = "running";
        document.getElementById("boto").style.opacity = "0";
        document.getElementById("boto2").style.opacity = "1";
        document.getElementById("timelapse_barra2").style.animationPlayState = "running";
        estat = true;
        console.log(estat);
    }

    else if (estat==true) {
        document.getElementById("player").pause();
        document.getElementById("lineart_effect2").style.animationPlayState = "paused";
        document.getElementById("boto").style.opacity = "1";
        document.getElementById("boto2").style.opacity = "0";
        document.getElementById("timelapse_barra2").style.animationPlayState = "paused";
        estat = false;
        console.log(estat);
    }
    
}


document.getElementById("boto").addEventListener('click', reproductor);


