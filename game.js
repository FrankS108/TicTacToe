let buttonRef = document.querySelectorAll(".button-to-select");
let gridCross = document.getElementById('turn-cross');
let gridZero = document.getElementById('turn-zero');
let scoreX = document.getElementById('scoreX');
let scoreY = document.getElementById('scoreY');
let resetButton = document.getElementById('resetButton');
let winningPatter = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let turnX = true;
let count = 0;

window.onload = function(){
    setTurn();    
};

const setTurn = () => {
    let turn = Math.floor(Math.random() * 3);

    console.log(turn);
    if(turn === 1){
        gridCross.style.background = "#10BF8A"
        gridZero.style.background = "#1F3540"
    }else{
        gridCross.style.background = "#1F3540"
        gridZero.style.background = "#10BF8A"
    }
}

const winCheck = () => {
    for(let i of winningPatter){
       let [one, two, three] = [
            buttonRef[i[0]].innerText,
            buttonRef[i[1]].innerText,
            buttonRef[i[2]].innerText,
       ];
       
        if(one != "" && two != "" && three != ""){
            if(one == two && two == three){
                win(one);
                console.log("Win");
            }
        }
    }
};

function win(player){
    for(let i of buttonRef){
        i.disabled = true;
    }

    if(player == "X"){
        scoreX.style.background = "#83DE33";
        scoreY.style.background = "#BF3D10"
        gridCross.style.background = "#10BF8A"
        gridZero.style.background = "#10BF8A"
    }else{
        scoreX.style.background = "#BF3D10"
        scoreY.style.background = "#83DE33";
        gridCross.style.background = "#10BF8A"
        gridZero.style.background = "#10BF8A"
    }
};


buttonRef.forEach((element) =>{
    element.addEventListener("click", () =>{
        if(count < 9 && !element.disabled){
            if(turnX){
                turnX = false;
                element.innerText = "X";
                element.disabled = true;
                gridCross.style.background = "#1F3540"
                gridZero.style.background = "#10BF8A"
                
            }else{
                turnX = true;
                element.innerText = "O";
                element.disabled = true;
                gridCross.style.background = "#10BF8A"
                gridZero.style.background = "#1F3540"
            }

            count += 1;

            if(count == 9){
                scoreX.style.background = "#83DE33";
                scoreY.style.background = "#83DE33";
            }
            console.log(count)
            winCheck();
        }
        
    })
});


resetButton.addEventListener("click", () =>{
    count = 0;
    buttonRef.forEach((element) => {
        element.innerHTML = "";
        element.disabled = false;
    })

    scoreX.style.background = "#F2B237";
    scoreY.style.background = "#F2B237";

    setTurn();
});