function getComputerChoice()
{
    let ranChoice = Math.random();

    if (ranChoice < 1/3)
    {
        return "rock";
    }
    else if(ranChoice > 2/3)
    {
        return "scissors";
    }
    else
    {
        return "paper";
    }
}



function playRound(computerSelection, playerSelection)
{
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    playerSelection = prompt("Rock, Paper, or Scissors?")
    if (playerSelection == computerSelection)
    {
        alert("Tie");
    }
    else if(playerSelection == "rock" && computerSelection == "scissors")
    {
        alert("Win!");
    }
    else if(playerSelection == "paper" && computerSelection == "rock")
    {
        alert("Win!");
    }
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {
        alert("Win!");
    }
    else
    {
        alert("Lose!");
    }
}

playRound();
