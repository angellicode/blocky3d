function chooseCharacter(){

}

function choseRed(){
    document.getElementById("prompt_text").innerHTML="YOU ARE NOW A RED BLOCK";
    setTimeout(choseRed, 3000);
    document.getElementById("prompt_box").style.visibility="hidden";

}

function choseBlue(){
    document.getElementById("prompt_text").innerHTML="YOU ARE NOW A BLUE BLOCK";
    setTimeout(choseBlue, 3000);
    document.getElementById("prompt_box").style.visibility="hidden";
    document.getElementById("model").setAttribute("obj-model","obj: url(res/model/block.obj); mtl: url(res/model/block.mtl)");
}