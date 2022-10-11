let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

function sumScoreHome(points){
    countHome += points;
    homeScore.textContent = countHome;
    changeHighlight();
}

function sumScoreGuest(points){
    countGuest += points;
    guestScore.textContent = countGuest;
    changeHighlight();
}

function changeHighlight(){
    if (countHome > countGuest){
        homeScore.style.color = 'red'; 
        guestScore.style.color = 'darkred'; 
    }
    else if(countGuest > countHome){
        guestScore.style.color = 'red'; 
        homeScore.style.color = 'darkred'; 
    }
    else if(countHome === countGuest){
        homeScore.style.color = 'red'; 
        guestScore.style.color = 'red';
    }
}

function scoreZero(){
    homeScore.style.color = 'darkred'; 
    guestScore.style.color = 'darkred';
}

function newGame(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    countHome = 0;
    countGuest = 0;
    scoreZero();
}