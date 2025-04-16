let homeScore = 0
let awayScore = 0

let homeScoreEl = document.getElementById("home-score")
let awayScoreEl = document.getElementById("away-score")

function plusOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}
function plusTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}
function plusThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}
function plusOneAway() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}
function plusTwoAway() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}
function plusThreeAway() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}