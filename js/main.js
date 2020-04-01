'use strict'



function onUpadatePrefs() {
    setBcg()
    renderForcast()
}



function renderForcast() {
    document.querySelector(".forecast").innerText = getForecast();
}