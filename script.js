let coin = document.querySelector(".coin");
let playButton = document.querySelector("#play-btn");
let resetButton = document.querySelector("#reset-btn");

let sideA = 0;
let sideB = 0;

playButton.addEventListener("click",() =>{
    let i = Math.floor(Math.random() * 2);

    coin.style.animation = "none";

    if(i) {
        setTimeout(function(){
            coin.style.animation = "spin-Aside 3s forwards";
        }, 100);
        sideA++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-Bside 3s forwards";
        }, 100);
        sideB++;
    }
    setTimeout (updateCounter, 3000);
    disableButton();
    });

    function updateCounter(){
        document.querySelector("#Aside-counter").textContent = `A-Side: ${sideA}`;
        document.querySelector("#Bside-counter").textContent = `B-Side: ${sideB}`;
    }

resetButton.addEventListener("click",() =>{
    coin.style.animation = "none";
    sideA = 0;
    sideB = 0;
    updateCounter();
});

function disableButton(){
    playButton.disabled = true;
    setTimeout(function(){
        playButton.disabled = false;
    },3000);
};