throwDictionary = {'rock': '1','paper': '2', 'scissors': '3'}
function randomThrowGenerator(){
    randomThrow = Math.floor(Math.random() * 3) + 1;
    if(randomThrow === 1){
        console.log('rock');
        return 'rock';
    } 
    else if(randomThrow ===2){
        console.log('paper');
        return 'paper';
    }
    else{
        console.log('scissors');
        return 'scissors';
    }
}
function throwComparision(throw_a, throw_b){
    throw_a_num = parseInt(throwDictionary[throw_a.toLowerCase()]);
    throw_b_num = parseInt(throwDictionary[throw_b.toLowerCase()]);
    console.log(throw_a_num)
    console.log(throw_b_num)
    if(throw_a_num - throw_b_num == 1 || (throw_a_num == 1 && throw_b_num == 3)){
        return 1;
    }
    else if(throw_a_num == throw_b_num){
        return 0;
    }
    else{
        return -1;
    }

}
function play(playerSelection, computerSelection){
    switch(throwComparision(playerSelection, computerSelection)){
        case 1: {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return `You win! ${playerSelection} beats ${computerSelection}`
            break;
        }
        case 0: {
            console.log(`Draw!, You both threw ${playerSelection}`);
            return `Draw!, You both threw ${playerSelection}`
            break;
        }
        case -1: {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return `You lose! ${computerSelection} beats ${playerSelection}`
            break;
        }
    }
}
function game(){
    for(let i = 0; i < 5; i++){
        yourPick = prompt('Pick your next move')
        play(yourPick, randomThrowGenerator())
    }
}
