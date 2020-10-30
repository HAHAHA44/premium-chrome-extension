let sortBtn = document.getElementById('sort');

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