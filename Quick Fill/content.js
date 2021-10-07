var inputs;

window.onload = function(){  
    getInputs();
    console.log("Content");
}

function getInputs() {
    inputs = document.getElementsByTagName('input');
    console.log("Inputs: ",inputs.length);
}

/* 
    fill() and unfill() iterate through the array of all inputs,
    if they are text feilds, their value is changed
*/
function fill(data) {
    for (var i = 0, l = inputs.length; i < l; i++) {
        if(inputs[i].type == "text") inputs[i].value = data.Text;
    }
}

function unfill() {
    for (var i = 0, l = inputs.length; i < l; i++) {
        if(inputs[i].type == "text") inputs[i].value = "";
    }
    
}


// A simple listener recieveing requests from the 'popup.hmtl'
function ListeningMethod(request, sender, callback) {
    if (request.action == 'fill') fill(request.data);
    else if (request.action == 'unfill') unfill();
    else if (request.action == 'getInputs') getInputs();
}

chrome.extension.onRequest.addListener(ListeningMethod);