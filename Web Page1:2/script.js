function lighton() {
    document.getElementById('mypic').src = '../webDEV/images/desklaptop.jpg';
    //obj.innerHTML = "Mouse over me "

}


function lightoff() {
    document.getElementById('mypic').src = '../webDEV/images/calmpic.png';
}


//------------------- Input checkbox ----------------------------------------------

function verification () {
    res = parseInt (document.getElementById('result').value);

    if (res == 20 ){
        document.getElementById('result').style.color ="green";
        alert ( res + '' + 'Correct!');
    }

    else {
        document.getElementById('result').style.color = "red ";
    }
}





