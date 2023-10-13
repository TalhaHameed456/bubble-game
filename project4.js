
var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}
function getHitVal(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makebubble(){
    var clutter = "";

    for(var i = 1; i<=168; i++){
        var rn = Math.floor(Math.random()*10);
       clutter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}


function runtimer(){
   var timerclose =  setInterval(function(){
        if(timer >0){
            timer--;
            document.querySelector("#timerval").textContent= timer;
        }
        else{
           clearInterval(timerclose);
           document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    },1000)
    
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
   var Numberrn = Number(dets.target.textContent);
   if(Numberrn === hitrn){
    increaseScore();
    getHitVal();
    runtimer();
    makebubble();
   } 
})


getHitVal();
runtimer();
makebubble();