const choices = [   {name: 'rock' , beat:'scissors', icon:'🤜'},
                    {name: 'paper' , beat:'rock', icon:'🖐️'},
                    {name: 'scissors' , beat:'paper', icon:'✌️'},];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playgame(playerChoice)
{
    const computerChoice = choices[Math.round(Math.random()*2)];
    let result = '';
    if (playerChoice.name === computerChoice.name)
    {
        result = 'Draw';
    }
    else if (playerChoice.name === computerChoice.beat)
    {
        result = 'Computer Wins';
    }
    else
    {
        result = 'Player Wins';
    }

    playerDisplay.innerHTML = `<h3>Player : ${playerChoice.name} ${playerChoice.icon}</h3>`;
    computerDisplay.innerHTML = `<h3>Computer : ${computerChoice.name} ${computerChoice.icon}</h3>`;
    resultDisplay.innerHTML = `<h3>${result}</h3>`;

    resultDisplay.classList.remove('text-success' , 'text-danger' , 'text-success');
    
    switch(result)
    {
        case 'Player Wins':
            resultDisplay.classList.add('text-success');
            break;
        case 'Computer Wins':
            resultDisplay.classList.add('text-danger');

            break;
    }
}

