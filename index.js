let boxx=document.querySelectorAll(".box");
let resetbtn=document.querySelector (".reset-game-btn");
let newGameBtn=document.querySelector(".restart-game");
let msgContanaer=document.querySelector(".msg-contanaer");
let winnerPa=document.querySelector("#winner")

let turn=true;
let winPattan=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


// step-1 ... accose is all box in my game , and put the value in there ....
boxx.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        cheackWinner();
    })
})


// step -2 ... cheack the game winner
const cheackWinner=()=>{
    for (let pattan of winPattan){
        // console.log(pattan[0] ,pattan[1],pattan[2]) ;
        // console.log(boxx[pattan[0]].innerText,boxx[pattan[1]].innerText ,boxx[pattan[2]].innerText );
        let position1val=boxx[pattan[0]].innerText;
        let position2val=boxx[pattan[1]].innerText;
        let position3val=boxx[pattan[2]].innerText;
        if(position1val != "" && position2val != "" && position3val!=""){
            if(position1val ===position2val && position2val===position3val){
                console.log(" winner" ,position1val);
                showWinner(position1val); // show winner function call (step-3)
            }
        }
    }
}


// step -3 ... after the cheack winner , we have to show the winner 
const showWinner= (winner)=>{
    winnerPa.innerText=` Congratulations.. The Winner is ${winner}`;
    msgContanaer.classList.remove("hidee");
    disabledBoxes(); // step-4 are calling here.
}


//  step -4... when the game winner is show them we have to disabled the all game box ..
const disabledBoxes= ()=>{
    for (let box of boxx){
        box.disabled=true;
    }
}


// step-5... when we have to play one's again the game ..
const resetGame= ()=>{
    turn=true;
    eniabledBoxes(); // part-6 function are call here ..
}


// part-6.. when we have to play one's again the game ..then we have to eniable the all box ..
const eniabledBoxes= ()=>{
    for (let box of boxx){
        box.disabled=false;
        box.innerText="";
        msgContanaer.classList.add("hidee")
    }
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

