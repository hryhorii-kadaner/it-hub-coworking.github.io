var fullGreenHubPrice = document.getElementById('greenHubInnerText'),
    greenHubBtn1 = document.getElementById('greenHubWarningFirst'),
    greenHubBtn2 = document.getElementById('greenHubWarningSecond'),
    greenHubBtn3 = document.getElementById('greenHubWarningThird'),
    greenHubBtn4 = document.getElementById('greenHubWarningFourth'),
    greenHubBtn5 = document.getElementById('greenHubWarningFifth'),
    greenHubHidenContent = document.getElementById('greenHubShowAndHide');
    greenHubHiddenInnerText = document.getElementById('greenHub-hidden-inner-text');

var greenHubHoursPrices = {
    firstHour: "В сумме 260 грн",
    secondHour: "В сумме 520 грн",
    thirdHour: "В сумме 780 грн",
    sixHours: "В сумме 1560 грн",
    twelveHours: "В сумме 3120 грн"
};

function greenHubPricesEnabled() {
    greenHubHidenContent.style = "display: block;";
}
greenHubPricesEnabled();

function greenHubHidePrices() {
    greenHubHidenContent.style = "display: none;";
    greenHubHiddenInnerText.style = "display: block";
}



function checkGreenHubButtonsClickFirst() {    
    
    greenHubBtn2.classList.remove('btn-warning');
    greenHubBtn3.classList.remove('btn-warning');
    greenHubBtn4.classList.remove('btn-warning');
    greenHubBtn5.classList.remove('btn-warning');

    fullGreenHubPrice.innerHTML = greenHubHoursPrices.firstHour; 

    greenHubBtn1.classList.add('btn-warning');
    greenHubHidePrices();
}

function checkGreenHubButtonsClickSecond() {
    greenHubBtn1.classList.remove('btn-warning');
    greenHubBtn3.classList.remove('btn-warning');
    greenHubBtn4.classList.remove('btn-warning');
    greenHubBtn5.classList.remove('btn-warning');

    fullGreenHubPrice.innerHTML = greenHubHoursPrices.secondHour;

    greenHubBtn2.classList.add('btn-warning');

    greenHubHidePrices();
}
function checkGreenHubButtonsClickThird() {
    greenHubBtn2.classList.remove('btn-warning');
    greenHubBtn1.classList.remove('btn-warning');
    greenHubBtn4.classList.remove('btn-warning');
    greenHubBtn5.classList.remove('btn-warning');

    fullGreenHubPrice.innerHTML = greenHubHoursPrices.thirdHour;

    greenHubBtn3.classList.add('btn-warning');

    greenHubHidePrices();
}
function checkGreenHubButtonsClickFourth() {
    greenHubBtn2.classList.remove('btn-warning');
    greenHubBtn3.classList.remove('btn-warning');
    greenHubBtn1.classList.remove('btn-warning');
    greenHubBtn5.classList.remove('btn-warning');

    fullGreenHubPrice.innerHTML = greenHubHoursPrices.sixHours;

    greenHubBtn4.classList.add('btn-warning');

    greenHubHidePrices();
}
function checkGreenHubButtonsClickFifth() {
    greenHubBtn2.classList.remove('btn-warning');
    greenHubBtn3.classList.remove('btn-warning');
    greenHubBtn4.classList.remove('btn-warning');
    greenHubBtn1.classList.remove('btn-warning');

    fullGreenHubPrice.innerHTML = greenHubHoursPrices.twelveHours;

    greenHubBtn5.classList.add('btn-warning');

    greenHubHidePrices();
}




