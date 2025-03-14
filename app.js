let userScore=0;
let comScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg-box");
let youS=document.querySelector("#you");
let comS=document.querySelector("#com");
const drawGame=()=>{
    console.log("it is draw");
    msg.innerText="game was draw.play again ?";
    msg.style.backgroundColor="blue";
}
const comchoice=()=>{
    let a=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return a[randIdx];
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        console.log("youn won!");
        msg.innerText="you won!";
        msg.style.backgroundColor="green";
        youS.innerText=userScore;
    }
    else{
        comScore++;
        console.log("youn lost!!!");
        msg.innerText="you lost!";
        msg.style.backgroundColor="red";
        comS.innerText=comScore;

    }
}
const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);
    let comChoice=comchoice();
    console.log("computer choice =",comChoice);
    if(comChoice===userChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=comChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=comChoice==="scissors"?false:true;
        }
        else{
            //rock,paper
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
   
})