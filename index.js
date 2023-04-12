let userQ = prompt('Type in your call!');
let userinput = userQ.toUpperCase();



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

function playoneround(getComputerChoice,userinput){
    if(getComputerChoice=="Rock" && userinput == "ROCK"){
        return 'Tie!';
    }   
    else if(getComputerChoice=="Rock" && userinput == "PAPER"){
    return 'You win! Paper beats Rock.';
    }   
    else if(getComputerChoice=="Rock" && userinput == "SCISSORS"){
    return 'You lose! Rock beats scissors.';
    }
    else if(getComputerChoice=="Paper" && userinput == "ROCK"){
    return 'You lose! Paper beats rock';
    }
    else if(getComputerChoice=="Paper" && userinput == "PAPER"){
    return "Tie!";
    }
    else if(getComputerChoice=="Paper" && userinput == "SCISSORS"){
    return 'You win! Scissors beat Paper.';
    }
    else if(getComputerChoice=="Scissors" && userinput == "ROCK"){
        return 'You win! rock beats Scissors.';
    }
    else if(getComputerChoice=="Scissors" && userinput == "PAPER"){
        return 'You lose! Scissors beat Paper.';
    }
    else if(getComputerChoice=="Scissors" && userinput == "SCISSORS"){
        return 'Tie!';
    }
}
console.log(playoneround(getComputerChoice(), userinput));

