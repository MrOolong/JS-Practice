const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      return userInput;
    }
  }
  
  let validTest = "paper";
  //console.log(getUserChoice(validTest));
  
  const getComputerChoice = () => {
    let ranNum = Math.floor(Math.random() * 3);
    // console.log(ranNum);
    
    switch (ranNum) {
      case 0: 
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  //console.log(getComputerChoice());
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game was a tie!";
    }
  
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    }
  
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return "The computer won!";
        } else {
          return "You won!";
        }
    }
  
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return "The computer won!";
        } else {
          return "You won!";
        }
      }

       if (userChoice === "bomb") {
        if (computerChoice === "rock" || computerChoice === "paper" || computerChoice === "scissors") {
          return "You won flawlessly!";
        } 
      }
    }
  
    //console.log(determineWinner('bomb', 'rock'));
  
    const playGame = () => {
      const userChoice = getUserChoice("rock");
  
      const computerChoice = getComputerChoice();
  
      console.log(`You threw ${userChoice} and the computer threw ${computerChoice}.`);
      console.log(determineWinner(userChoice, computerChoice));
    }

   playGame();
