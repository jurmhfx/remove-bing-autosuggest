chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        setDefaultValues();
    }
});

function setDefaultValues() {
    chrome.storage.sync.set({
        bingMainSearch: true,
        bingAiChat: true
    });
}
