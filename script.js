let inputEl = document.querySelector("#input");
let buttonEl = document.querySelector("#guessBtn");
let stateGameEl = document.querySelector(".stateGame");
let randomNumber = Math.ceil(Math.random()*100);
let inputButton = document.querySelector(".inputbutton");
let restartBtn = document.querySelector(".restartBtn");
let spanCurrentGame = document.querySelector("#spanCurrentGame");
let currentGame = 1;
let calc=0;
let getNumber = () =>{
   
    console.log(randomNumber);
    if(isNaN(inputEl.value) || inputEl.value==='' || +inputEl.value<1 || +inputEl.value>100 ){
        stateGameEl.textContent = "Error";   
    }
    else if (+inputEl.value === randomNumber) {
        calc++;
    if(calc%10==1) {
      stateGameEl.textContent = ` Угадал за ${calc} ход`;
    }
    else if(calc%10==2 || calc%10==3 || calc%10==4){
        stateGameEl.textContent = ` Угадал за ${calc} хода`;
    }
        else{
            stateGameEl.textContent = ` Угадал за ${calc} ходов`;
        }    
    inputButton.style.display = 'none';
    spanCurrentGame.textContent = `${currentGame}`;
    restartBtn.style.display = "block";
    restartBtn.style.marginTop = '48px';
}
//console.log(randomNumber);
else
{ 
calc++; 
(+inputEl.value > randomNumber)?stateGameEl.textContent = "Меньше": stateGameEl.textContent = "Больше"; 
} 
inputEl.value ='';
}
let restartGame=() => { //обновление игры при нажатии кнопки "Начать сначала"
currentGame++;
inputButton.style.display = "block";
restartBtn.style.display = 'none';
stateGameEl.textContent = '—';
inputEl=document.querySelector("#input");
randomNumber = Math.ceil(Math.random()*100);
calc = 0;
}
buttonEl.addEventListener("click", getNumber);
restartBtn.addEventListener("click",restartGame);

   
    






