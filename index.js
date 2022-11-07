let homeScore = document.getElementById("home-score")
let homeScoreCount = 0
homeScore.textContent = 0

let guestScore = document.getElementById("guest-score")
let guestScoreCount = 0
guestScore.textContent = 0



function homeInc1() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount
}

function homeInc2() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function homeInc3() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function guestInc1() {
   guestScoreCount += 1
    guestScore.textContent = guestScoreCount
}

function guestInc2() {
    guestScoreCount += 2
    guestScore.textContent = guestScoreCount
}

function guestInc3() {
    guestScoreCount += 3
    guestScore.textContent = guestScoreCount
}