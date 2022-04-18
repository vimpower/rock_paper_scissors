let playerPick;
let playerScore = 3;
let computerScore = 3;
let rockCount = 4;
let paperCount = 4;
let scissorsCount = 4;
let computerDeck = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2];

throwDictionary = {'rock': '1','paper': '2', 'scissors': '3'}
function randomThrowGenerator(){
    // randomThrow = Math.floor(Math.random() * 3) + 1;
    random_index = Math.floor(Math.random() * computerDeck.length)
    randomThrow = computerDeck[random_index];
    computerDeck.splice(random_index, 1);
    console.log(computerDeck)
    if(randomThrow === 1){
        console.log('Rock');
        return 'Rock';
    } 
    else if(randomThrow ===2){
        console.log('paper');
        return 'Paper';
    }
    else{
        console.log('scissors');
        return 'Scissors';
    }
}
function throwComparision(throw_a, throw_b){
    throw_a_num = parseInt(throwDictionary[throw_a.toLowerCase()]);
    throw_b_num = parseInt(throwDictionary[throw_b.toLowerCase()]);
    console.log(throw_a_num);
    console.log(throw_b_num);
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

const moves = document.querySelectorAll('.move');
const heading = document.querySelector('h2')
const flip_sound = document.querySelector('.flip')
const star = document.querySelector('.star')
const player_stars = document.querySelector('.player')
const computer_stars = document.querySelector('.computer')
const rockText = document.querySelector('.Rock > p')
const paperText = document.querySelector('.Paper > p')
const scissorsText = document.querySelector('.Scissors > p')
const e_card = document.querySelector('.card > img')

console.log(e_card)

function logEvent(e){
    moves.forEach(move => move.classList.remove('devil'))

    playerPick = this.classList[0];
    flip_sound.currentTime = 0;
    flip_sound.play();
    console.log(playerPick);

    switch(playerPick){
        case 'Rock':
            rockCount--;
            rockText.textContent = `x${rockCount}`;
            if(rockCount <= 0){
                    moves.forEach(move => {if(move.classList[0] == 'Rock'){
                        move.removeEventListener('click', logEvent)    
                    }
                })
            }
            break;
        case 'Paper':
            paperCount--;
            paperText.textContent = `x${paperCount}`;
            if(paperCount <= 0){
                    moves.forEach(move => {if(move.classList[0] == 'Paper'){
                        move.removeEventListener('click', logEvent)    
                    }
                })
            }
            break;
        case 'Scissors':
            scissorsCount--;
            scissorsText.textContent = `x${scissorsCount}`;
            if(scissorsCount <= 0){
                moves.forEach(move => {if(move.classList[0] == 'Scissors'){
                    move.removeEventListener('click', logEvent)    
                }
            })
        } 
            break;
    }
    enermyPick = randomThrowGenerator()
    moves.forEach(move => {
        if(move.classList[0] == enermyPick){
        move.classList.add('devil');
    }})

    // this.classList.add('devil')
    heading.textContent = play(playerPick, enermyPick);
    if(heading.textContent.includes('win')){
        player_stars.appendChild(computer_stars.firstElementChild);
        playerScore++;
        computerScore--;
        // computer_stars.removeChild(computer_stars.firstElementChild);
    }
    else if(heading.textContent.includes('lose')){
        computer_stars.appendChild(player_stars.firstElementChild);
        computerScore++;
        playerScore--;
        // player_stars.removeChild(player_stars.firstElementChild);
    }
    if(playerScore >= 5){
        moves.forEach(move => move.removeEventListener('click', logEvent))
        heading.textContent = 'Kaiji won'
        e_card.src = "images/e_card/emperor.png"
    }
    else if(computerScore >=5){
        moves.forEach(move => move.removeEventListener('click', logEvent))
        heading.textContent = 'Funai won'
        e_card.src = "images/e_card/slave.png"
    }
    else if(playerScore == 3 && computerScore == 3 && computerDeck.length == 0){
        heading.textContent = 'You survived'
        e_card.src = "images/e_card/citizen.png"
    }
}

moves.forEach(move => move.addEventListener('click', logEvent, {capture: false}))