
function main(){
    let number1 = randomNumber();
    let number2 = randomNumber();
    changeFirstImage(number1);
    changeSecondImage(number2);
    showWinenr(number1,number2);
    
}

function randomNumber(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    return randomNumber1;
}

function changeFirstImage(number){
    let direc = "images/dice" + number + ".png";
    document.querySelector(".img1").setAttribute("src",direc);
}

function changeSecondImage(number){
    let direc = "images/dice" + number + ".png";
    document.querySelector(".img2").setAttribute("src",direc);
}

function showWinenr(number1,number2){
    if(number1 > number2){
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else if(number1 < number2){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").textContent = "Draw!";
    }

}

main()