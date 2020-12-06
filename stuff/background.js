//Background

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(activeTab) {
            var newURL = "https://www.youtube.com/watch?v=AjELuCHzBnI";
            chrome.tabs.create({ url: newURL });
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt2');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(activeTab) {
            var newURL = "https://www.youtube.com/watch?v=B0W6D97nRBE";
            chrome.tabs.create({ url: newURL });
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt3');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(activeTab) {
            var newURL = "https://www.youtube.com/watch?v=2L2lnxIcNmo";
            chrome.tabs.create({ url: newURL });
        });
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt4');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(activeTab) {
            var newURL = "https://www.youtube.com/watch?v=i50ZAs7v9es";
            chrome.tabs.create({ url: newURL });
        });
    }, false);
}, false);