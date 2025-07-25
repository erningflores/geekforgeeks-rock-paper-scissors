/**
 * This works with less program. It uses the array.
 * The only problem is the first click of button. It displays the computer won right away.
 * I understand everything that is put it here.
 * what i research where css like top, z-index, cursor
 * This is the geeks for geeks program (html, css and javascript)
 */

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ["rock", "paper", "scissor"];

        playerOptions.forEach(option => {
            option.addEventListener("click", function(){
                const movesleft = document.querySelector(".movesleft");
                moves++;
                movesleft.innerText = `Moves left: ${10 - moves}`;

                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);

                if(moves == 10){
                    gameOver(playerOptions, movesleft);
                }
            })
        })

    }
    
    const winner = (player, computer) => {
        const result = document.querySelector(".result");
        const playerScoreBoard = document.querySelector(".p-count");
        const computerScoreBoard = document.querySelector(".c-count");

        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if(player === computer){
            result.textContent = "Tie";
        }else if(player == "rock"){
            if(computer == "paper"){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == "scissor"){
            if(computer == "rock"){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }else if(player == "paper"){
            if(computer == "scissor"){
                result.textContent = "Computer Won";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else {
                result.textContent = "Player Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

    }

    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector(".move");
        const result = document.querySelector(".result");
        const reloadBtn = document.querySelector(".reload");

        playerOptions.forEach(option => {
            option.style.display = "none";
        });

        chooseMove.innerText = "GameOver!!";
        movesLeft.style.display = "none";

        if(playerScore > computerScore){
            result.style.fontSize = "2em";
            result.innerText = "You won the game";
            result.style.color = "#308D46";
        }else if(playerScore < computerScore){
            result.style.fontSize = "2em";
            result.innerText = "You lost the game";
            result.style.color = "red";
        }else {
            result.style.fontSize = "2em";
            result.innerText = "Tie";
            result.style.color = "grey";
        }
        reloadBtn.innerText = "Restart";
        reloadBtn.style.display = "flex";
        reloadBtn.addEventListener("click", () => {
            window.location.reload();
        });
    }

    playGame();
}

game();
