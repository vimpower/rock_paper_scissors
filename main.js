function computerPlay(){
    computerPick = Math.floor(Math.random() * 3) + 1;
    if(computerPick === 1) console.log('Rock');
    else if(computerPick ===2) console.log('Paper');
    else console.log('Scissors');
    return computerPick;
}
function play(playerSelection, computerSelection){
    if(playerSelection === 1){
        if(computerSelection === 1){
            console.log(`Draw! You both threw Rock`)
        }
        else if(computerSelection === 2){
            console.log('You lose! Paper beats Rock')
        }
        else{
            console.log('You win! Rock beats Sissors')
        }
    }
    else
}