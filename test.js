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
    calc++;  
    console.log(randomNumber);
    if(isNaN(inputEl.value) || inputEl.value==='' || +inputEl.value<1 || +inputEl.value>100 ){
        stateGameEl.textContent = "Error";   
    }
    else if (+inputEl.value === randomNumber) {
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
// console.log(randomNumber);
else
{  
(+inputEl.value > randomNumber)?stateGameEl.textContent = "Меньше": stateGameEl.textContent = "Больше"; 
} 
inputEl.value ='';
}
let restartGame=() => {
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

    // if(inputEl.value===''){
    //     stateGameEl.textContent = "Error1";
    //     console.log('pusto');
    // }
    //     else if(isNaN(inputEl.value)){
    //             stateGameEl.textContent = "Error"; 
    //             // inputEl.value ='';
    //             console.log('tekst');
                
    //         }
    //         else if (+inputEl.value<1){
    //             stateGameEl.textContent = "-Error";  
    //             // inputEl.value ='';
    //             console.log('-number');
    //         }
    //         else if(+inputEl.value>100){
    //             stateGameEl.textContent = ">Error";
    //             inputEl.value =''; 
    //             console.log('>number');
    //             console.log(randomNumber);
    //         }
    








            // else if(+inputEl.value > randomNumber){
            //     // calc++;
            //     // gameAttempts++;
            //     stateGameEl.textContent = "Меньше";
            //     // inputEl.value ='';
            //     console.log('<');
            //     console.log(randomNumber);

            // }
            // else if(+inputEl.value < randomNumber){
            //     // // calc++;
            //     // gameAttempts++;
            //     stateGameEl.textContent = "Больше";
            //     // inputEl.value ='';
            //     console.log('>');
            //     console.log(randomNumber);
            // }
       

    // function guessNumber(){
    //     let tryes = 0;
    //     let randommNumber = Math.ceil(Math.random() * 100); //80
    //     console.log(randommNumber)
    //     let guess = +prompt('Введите число'); //10
    
    //     while(randommNumber !== guess){
    //         if (isNaN(guess)){
    //             guess = +prompt('Ошибка! Вы не ввели число');
    //         } else if (guess === 0){
    //             alert(`Игра окончена. Загаданное число = ${randommNumber}`)
    //             break;
    //         } else if(guess < 1){
    //             guess = +prompt('Ошибка! Вы ввели число меньше 1');
    //         } else if (guess > 100){
    //             guess = +prompt('Ошибка! Вы ввели число больше 100');
    //         } else if (guess < randommNumber) {
    //             guess = +prompt('Не угадали. Введите число больше');
    //             tryes++;
    //         } else if (guess > randommNumber){
    //             guess = +prompt('Не угадали. Введите число меньше');
    //             tryes++;
    //         }
    //     }
    //     if(randommNumber == guess) {
    //         tryes++;
    //         alert(`Поздравляем! Угаданное число = ${randommNumber}
    // Вы угадали с попытки №${tryes}`)
    //     }
    // }




//     let inputNumberEl = parseFloat(inputEl.value);
//   if(inputNumberEl>randomNumber){
//    stateGameContentEl.textContent = "Меньше";
//   }
//   else if(inputNumberEl<randomNumber)
//   stateGameContentEl.textContent = "Больше";
//  else
//     {
//         stateGameContentEl.textContent = `Верно!Это число - ${inputNumberEl}.` 
//     }
 

