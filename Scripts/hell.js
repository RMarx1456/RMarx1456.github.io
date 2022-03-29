function hellOnEarth() {
    /*Audio Variables*/
    var Laugh = new Audio('Audio/Laugh.mp3');
    var Chord = new Audio('Audio/CHORD.WAV');
    
    document.body.style.backgroundColor = "rgb(190,29,0)";
    document.getElementById("hellFire").style.display = 'block';
    document.getElementById("titleText").innerHTML = "Hell!";
    document.getElementById("titleTopBorderText").innerHTML = "Welcome to hell!";
    
    Laugh.loop = true;
    Laugh.play();
    
    setTimeout(() => {
    Chord.play();
    document.getElementById("hellInfo").style.display = 'block';
    }, 2000);
}