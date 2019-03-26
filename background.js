console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

window.word = "Veleom";

function receiver(request, sender, sendResponse) {
  console.log(request);
  word = request.text;
}