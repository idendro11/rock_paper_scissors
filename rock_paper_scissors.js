let computerSelection;

function getComputerChoice()
{
    let ranChoice = Math.random();

    if (ranChoice < 1/3)
    {
        computerSelection = "rock";
        return computerSelection;
    }
    else if(ranChoice > 2/3)
    {
        computerSelection = "scissors";
        return computerSelection;
    }
    else
    {
        computerSelection = "paper";
        return computerSelection;
    }
}

console.log(getComputerChoice());

