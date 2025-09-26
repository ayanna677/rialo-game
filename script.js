window.onload=function(){
const gameArea=document.getElementById("gameArea");
const scoreDisplay=document.getElementById("score");
const timerDisplay=document.getElementById("timer");
const timerBar=document.getElementById("timerBar");
const restartBtn=document.getElementById("restart");

let score=0; let time=30; let gameInterval, balloonInterval;

// Create clouds
const sky=document.getElementById("sky");
for(let i=0;i<6;i++){
const cloud=document.createElement("div");
cloud.classList.add("cloud");
cloud.style.width=100+Math.random()*150+"px";
cloud.style.height=50+Math.random()*50+"px";
cloud.style.top=Math.random()*200+"px";
cloud.style.left="-250px";
cloud.style.animationDuration=20+Math.random()*20+"s";
cloud.style.opacity=0.4+Math.random()*0.6;
sky.appendChild(cloud);
}

// Balloon logic
function createBalloon(){
const balloon=document.createElement("div");
balloon.classList.add("balloon");
const colors=["red","blue","green"];
balloon.classList.add(colors[Math.floor(Math.random()*3)]);
balloon.style.left=Math.random()*(gameArea.offsetWidth-50)+"px";
balloon.style.bottom="-70px";
gameArea.appendChild(balloon);

const move=setInterval(()=>{
const currentBottom=parseInt(balloon.style.bottom);
if(currentBottom>gameArea.offsetHeight){ balloon.remove(); clearInterval(move); return;}
balloon.style.bottom=currentBottom+2+"px";
},20);

balloon.onclick=function(){
score++; scoreDisplay.textContent=score;
balloon.remove(); clearInterval(move);
}
}

balloonInterval=setInterval(createBalloon,1000);

// Timer
gameInterval=setInterval(()=>{
time--;
timerDisplay.textContent=time;
timerBar.style.width=(time/30*100)+"%";
if(time<=0){ clearInterval(gameInterval); clearInterval(balloonInterval); alert("Time Up! Score: "+score); }
},1000);

// Restart
restartBtn.onclick=function(){ location.reload(); }
}