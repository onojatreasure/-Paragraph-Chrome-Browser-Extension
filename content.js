console.log("Chrome Extension go");


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message);

        let paragraphs = document.getElementsByTagName('p');
        for(elt of paragraphs){
            //elt.style['background-color'] = getRandomColor();
            elt.innerHTML = message.txt;
        }
    
} 
