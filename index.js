let userscore = 0;
let pcScore = 0;

function game(){
    for(i=0;i<5;i++){

let userQ = prompt('Type in your call!');
let userinput = userQ.toUpperCase();
let computerChoice = getComputerChoice()

 function getComputerChoice(){
   let PcChoice = (Math.floor(Math.random() * 3) + 1)
    if (PcChoice == 1){
        return 'Rock';
    }
        else if (PcChoice == 2){
        return 'Paper';
    }
        else (PcChoice == 3)
        return 'Scissors';
    }

    
function playoneround(computerChoice,userinput){
    if(computerChoice.toUpperCase() == userinput){
        return 'Tie!';
    }   
    else if(computerChoice=="Rock" && userinput == "PAPER"){
    return 'You win! Paper beats Rock.';
    }   
    else if(computerChoice=="Rock" && userinput == "SCISSORS"){
    return 'You lose! Rock beats scissors.';
    }
    else if(computerChoice=="Paper" && userinput == "ROCK"){
    return 'You lose! Paper beats rock';
    }
    else if(computerChoice=="Paper" && userinput == "SCISSORS"){
    return 'You win! Scissors beat Paper.';
    }
    else if(computerChoice=="Scissors" && userinput == "ROCK"){
        return 'You win! rock beats Scissors.';
    }
    else if(computerChoice=="Scissors" && userinput == "PAPER"){
        return 'You lose! Scissors beat Paper.';
    }

}

function addpoints(){
    if (playoneround(computerChoice,userinput).includes ('win')){
     userscore++;
}   else if (playoneround(computerChoice,userinput).includes ('lose')){
     pcScore++;
}
}
addpoints();
console.log('Your score: ',userscore);
console.log('PC score: ',pcScore);
console.log(playoneround(computerChoice,userinput));
}
}
game();

