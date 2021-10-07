var button;

var colorized = false;

document.addEventListener('DOMContentLoaded', function() {
    button = document.getElementById("button");
    
    console.log(button.value+" loaded");
    
    button.addEventListener("click", pressed);
});

function pressed() {
    console.log("pressed");
    if(!colorized) colorize();
    else unColorize();
}

function colorize() {
    button.value = "uncolorize";
    send("colorize");
    colorized = true;
}

function unColorize() {
    button.value = "colorize";
    send("uncolorize");
    colorized = false;
}

function send(action) {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {
            'action': action,
        });
    });
}