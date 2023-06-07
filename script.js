let coin = document.querySelector(".coin");
let playButton = document.querySelector("#play-btn");
let resetButton = document.querySelector("#reset-btn");

let sideA = 0;
let sideB = 0;
let sideC = 0;

playButton.addEventListener("click",() =>{
    let i = Math.floor(Math.random() * 3);

    coin.style.animation = "none";

    if(i === 0) {
        setTimeout(function(){
            coin.style.animation = "spin-Aside 3s forwards";
        }, 100);
        sideA++;
    }

    else if (i === 1){
        setTimeout(function(){
            coin.style.animation = "spin-Bside 3s forwards";
        }, 100);
        sideB++;
    } else{
        setTimeout(function(){
            coin.style.animation = "spin-Cside 3s forwards"
        },100);
        sideC++;
    }
    setTimeout (updateCounter, 3000);
    disableButton();
    });

    function updateCounter(){
        document.querySelector("#Aside-counter").textContent = `A-Side: ${sideA}`;
        document.querySelector("#Bside-counter").textContent = `B-Side: ${sideB}`;
        // document.querySelector("Cside-counter").textContent =`C-Side: ${sideC}`; 
    }

resetButton.addEventListener("click",() =>{
    coin.style.animation = "none";
    sideA = 0;
    sideB = 0;
    // sideC = 0; 
    updateCounter();
});

function disableButton(){
    playButton.disabled = true;
    setTimeout(function(){
        playButton.disabled = false;
    },3000);
};