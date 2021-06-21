const cursor=document.querySelector('.cursor');
const coin=document.querySelector('.coin');
const scoreMeter=document.querySelector('.score');
const timeMeter=document.querySelector('.timing');
const highMeter=document.querySelector('.highscore'); 
const startMatch=document.querySelector('.but');
const success=document.querySelector('.win');
const harm=document.querySelector('.lose');
const begin=document.querySelector('.start');
const finish=document.querySelector('.over');



 var score=0;
 var t=30;
 var highscore=0;

 //preventing from the click outside the play button.

 document.querySelector('.landing').addEventListener('click', (e) => e.stopPropagation());

//start the game
startMatch.addEventListener('click',()=>{
    document.querySelector('.landing').style.opacity=0;

    begin.currentTime=0;
    begin.play();
    setTimeout(()=>{
        document.querySelector('.landing').style.display="none";
    },2000)
    start();
})




 //using the setInterval

const start=()=>{
    setInterval(()=>{

        timer();
    },1000)
}



// on loading the window
window.onload=()=>{
    if(localStorage.getItem('highscore')){
        highscore=localStorage.getItem('highscore');
    
        highMeter.innerHTML = `Highscore ${highscore}`;
    }
    scoreMeter.innerHTML=score;
    timeMeter.innerHTML=t;
   
     respawn();
 
}
document.addEventListener('mousemove',(e)=>{
    cursor.style.left=`${e.clientX}px`;
    cursor.style.top=`${e.clientY}px`;
})

const respawn=()=>{
    const height=Math.floor(Math.random() * window.innerHeight);
    const width=Math.floor(Math.random() * window.innerWidth);
    console.log(height);
    coin.style.top=`${height}px`;
    coin.style.left=`${width}px`;

}

//destroy the coin
coin.addEventListener('click',(e)=>{
    e.stopPropagation();
    success.currentTime = 0;
    success.play();
    score += 1;
    scoreMeter.innerHTML=score;
    respawn();
})

//time
 
const timer=()=>{
    if(t===0){
        gameend();
    }
    t--;
    timeMeter.innerHTML=t;

}
//for harm voice

document.addEventListener('click',()=>{
    score--;
    scoreMeter.innerHTML=score;
    harm.currentTime=0;
    harm.play();
})






//game end
const gameend=()=>{
    finish.currentTime=0;
    finish.play();

    alert(`GAMEOVER \n You Score${score}`)

    if(localStorage.getItem('highscore')<score){
        localStorage.setItem('highscore',score);
        highscore=score;
        highMeter.innerHTML=`Highscore ${highscore}`
    }
    score=0;
    t=30+2;
    scoreMeter.innerHTML=score;
    timeMeter.innerHTML=t;

}
