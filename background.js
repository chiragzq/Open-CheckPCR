function callback(result) {
    for(let i = 0;i < result.length;i ++) {
        if(result[i].name === "Check PCR") {
            chrome.management.launchApp(result[i].id);
            return;
        }
    }
    alert("Check PCR is not installed. Please install it.");
}

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.management.getAll(callback);
});