let userScore=0;
let compScore=0;
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const res = document.querySelector("#result");
const drawGame =() => {
    console.log("Game is draw");
    res.innerText="Game is draw. Try again";
    res.style.backgroundColor= "black"; 
};
 const genCompChoice = () => {
    let choices=["Rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    const compChoice= choices[randIdx];
    return compChoice;
 };
 const showwin =(userwin) => {
    if(userwin){  
        console.log("you win");
        res.innerText="You win!";
        res.style.backgroundColor = "green";
        userScore++; 
        userScorePara.innerText = userScore;
    }
    else{
        console.log("you lose");
        res.innerText="You lose!";
        res.style.backgroundColor="red";
        compScore++; 
        compScorePara.innerText = compScore;  
    }
 };
const playGame = (userchoice) => {
    console.log("User chouce =",userchoice);
    const compchoice = genCompChoice();
    console.log("Comp chouce =",compchoice);
    if(userchoice===compchoice){
       drawGame();
    }
    else {
         let userWin=true;
        if(userchoice==="Rock"){ 
            userWin = compchoice==="paper" ? false :  true;
           
        }
        else if(userchoice==="paper"){
            userWin = compchoice==="scissor" ? false: true;
         }
         else{
            userWin = compchoice==="Rock" ? false : true; 
         }
         showwin(userWin);
    } 
};
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice= choice.getAttribute("id");
        playGame(userchoice);
    });
}); 


