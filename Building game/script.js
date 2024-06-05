//make 2 varible to track user and computer score
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //access choice
const msg = document.querySelector("#msg"); //access msg
const userScorePara = document.querySelector("#user-score"); //get user score
const compScorePara = document.querySelector("#comp-score"); //get comp score


//fun to get computer choice
const genCompChoice =()=>{
    const option = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

//play game using user n comp choices and update scores
const drawGame = ()=>{
    console.log("Game draw !"); //for console
    msg.innerText ="Game draw ! Play again.";
    msg.style.backgroundColor = "navy";
};
const showWinner =(userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win !!");
        msg.innerText = `You win !! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose !!");
        msg.innerText = `You lose !! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    console.log("User choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            //sci or paper  //if rock then drwa
            userWin = compChoice === "Paper" ? false:true;
        }else if(userChoice ==="Paper"){
            userWin = compChoice === "Scissors" ? false:true;
        }else{
            //user chooses - sci
            //comp can choose rock or paper
            userWin = compChoice ==="Rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
//choosing user choice
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id"); //access by id of the elements
        playGame(userChoice);
    });
});


