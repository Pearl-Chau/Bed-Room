


function Animatedtoggle(){
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        text.innerHTML = "ON";
    }
    else{
        text.innerHTML = "OFF";
    }
}
/////////////////////////////////////////////////
//Den 01


let toggle =document.querySelector(".toggle");
let text=document.querySelector(".text");
function Animatedtoggle(){
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")){
        document.getElementById("denId_01").src = "densang.png";
        text.innerHTML = "ON";
        firebase.database().ref("/phong_bep").update({
            "Led1":'1'
            
        })
    }
    else{
        document.getElementById("denId_01").src = "light.png";
        text.innerHTML = "OFF";
        firebase.database().ref("/phong_bep").update({
            "Led1":'0'
        })
    }
}
// function Animatedtoggle2(){
//     toggle2.classList.toggle("active2");
//     if(toggle2.classList.contains("active2")){
//         text2.innerHTML = "ON";
//     }
//     else{
//         text2.innerHTML = "OFF";
//     }
// }

///////////////////////////////////////////////////
let toggle2 = document.querySelector(".toggle2");
let text2 = document.querySelector(".text2");


function Animatedtoggle2(){
    toggle2.classList.toggle("active2");
    if(toggle2.classList.contains("active2")){
        document.getElementById("exId_01").src = "lampon.png";
        text2.innerHTML = "ON";
        firebase.database().ref("/phong_bep").update({
            "Led2":'1'
        })
    }
    else{
        document.getElementById("exId_01").src = "lampof.png";
        text2.innerHTML = "OFF";
        firebase.database().ref("/phong_bep").update({
            "Led2":'0'
        })
    }
}
///////////////////////////////////////////////////////
let toggle3 = document.querySelector(".toggle3");
let text3 = document.querySelector(".text3");


function Animatedtoggle3(){
    toggle3.classList.toggle("active3");
    if(toggle3.classList.contains("active3")){
        document.getElementById("cu1").src = "curtainon.png";
        text3.innerHTML = "ON";
        firebase.database().ref("/phong_bep").update({
            "Led2":'1'
        })
    }
    else{
        document.getElementById("cu1").src = "curtainof.png";
        text3.innerHTML = "OFF";
        firebase.database().ref("/phong_bep").update({
            "Led2":'0'
        })
    }
}








var output = document.getElementById("demo");

var slider = document.getElementById("myRange").oninput = function()
{
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #6b8dff 0%, #ff2a5f ' + value + '%, #fff ' + value + '%, #fff 100%)'

    output.innerHTML = this.value;
}


/* ------------------------------Air conditioner-------------------------------- */
let toggle6 = document.querySelector(".toggle6");
let text6 = document.querySelector(".text6");
let doC = document.querySelector(".doC");


function Animatedtoggle6(){
    toggle6.classList.toggle("active6");
    if(toggle6.classList.contains("active6")){
        text6.innerHTML = "ON";
        doC.innerHTML = "26 ℃";
    }
    else{
        text6.innerHTML = "OFF";
        doC.innerHTML = " ";
    }
}
