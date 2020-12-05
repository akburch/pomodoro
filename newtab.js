// Opening a new tab

chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "http://stackoverflow.com/";
    chrome.tabs.create({ url: newURL });
  })