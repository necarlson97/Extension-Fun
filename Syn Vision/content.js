var alph = 'abcdefghijklmnopqrstuvwxyz'.split('');

var origional;
var colorized = false;

function colorize() {
    if(!colorized) {
        origional = document.body.innerHTML;
        document.body.innerHTML = getColorized(document.body.innerHTML);
    }
    colorized = true;
}

function getColorized(body) {
    
    var tag1 = "<span style=\"-webkit-animation: ";
    var tag2 = " 2s infinite;\">";
    var tag3 = "</span>";
    
    var alphaI = 0;
    
    for(c=0; c<2; c++) {
        while (alphaI < alph.length) {
            if(c==0) alph[alphaI] = alph[alphaI].toUpperCase();
            if(c==1) alph[alphaI] = alph[alphaI].toLowerCase();
            
            var newBody = "";
            var i = -1;
            while (body.length > 0) {
                i = body.indexOf(alph[alphaI], i+1);

                if(i < 0) {
                    newBody += body;
                    body = "";
                } else if(isNotTag(body, i)){
                    newBody += body.substr(0, i) + tag1 + alph[alphaI].toLowerCase() + 
                        tag2 + alph[alphaI] + tag3;
                    body = body.substr(i + 1);
                    i = -1;
                }

            }
            body = newBody;
            alphaI++;
        }
        alphaI=0;
    }
    
    return newBody;
}

function isNotTag(str, i) {
    return str.lastIndexOf(">", i) >= str.lastIndexOf("<", i) && 
        str.lastIndexOf("/script>", i) >= str.lastIndexOf("<script", i) && 
        str.lastIndexOf(";", i) >= str.lastIndexOf("&", i);
}

function uncolorize() {
    document.body.innerHTML = origional;
    colorized = false;
}

function listener(request, sender, callback) {
    if (request.action == 'colorize') colorize();
    else if (request.action == 'uncolorize') uncolorize();
}

chrome.extension.onRequest.addListener(listener);