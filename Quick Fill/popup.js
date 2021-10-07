var fillButton;
var fillStatus;

var filled = false;

function = window.onload() {
    console.log("WHAT");
}

document.addEventListener('DOMContentLoaded', function() {
    fillButton = document.getElementById("fill button");
    fillStatus = document.getElementById("fill status");

    fillButton.addEventListener("click", fillPressed);

    console.log("Content");
    getInputs();
});

function getInputs() {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {
            'action': 'getInputs',
            'data'  : {}
        });
    });
}

function fillPressed() {
    if(filled) unfill();
    else fill();
}

/* A pair of functions for calling the content.js fill() and unfill(), 
    as well as changing the popup to give some user feedback */
function fill() {
    fillStatus.innerHTML = "'filled'";
    fillButton.value = "Unfill";
    filled = true;

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {
            'action': 'fill',
            'data'  : {'Text' : 'Beep'}
        });
    });

}

function unfill() {
    fillStatus.innerHTML = "'empty'";
    fillButton.value = "Fill";
    filled = false;

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {
            'action': 'unfill'
        });
    });
}