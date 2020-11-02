let sortBtn = document.getElementById('print');

var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove();
};

sortBtn.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.storage.sync.set({action: "sort"}, function() {
      chrome.tabs.executeScript(
        tabs[0].id, {
        file: 'contentScript.js'
      });
    });
  });
};