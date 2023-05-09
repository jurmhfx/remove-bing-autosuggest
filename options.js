document.getElementById('options-form').addEventListener('submit', saveOptions);

function saveOptions(e) {
    e.preventDefault();

    const bingMainSearch = document.getElementById('bing-main-search').checked;
    const bingAiChat = document.getElementById('bing-ai-chat').checked;

    chrome.storage.sync.set({
        bingMainSearch,
        bingAiChat
    }, () => {
        // Update the status element with the success message
        const status = document.getElementById('status');
        status.textContent = 'Options saved';
        status.style.display = 'block';

        setTimeout(() => {
            status.style.display = 'none';
        }, 2000);
    });
}

function loadOptions() {
    chrome.storage.sync.get(['bingMainSearch', 'bingAiChat'], (items) => {
        if (items.bingMainSearch === undefined) {
            items.bingMainSearch = true;
            chrome.storage.sync.set({ bingMainSearch: true });
        }
        
        if (items.bingAiChat === undefined) {
            items.bingAiChat = true;
            chrome.storage.sync.set({ bingAiChat: true });
        }

        document.getElementById('bing-main-search').checked = items.bingMainSearch;
        document.getElementById('bing-ai-chat').checked = items.bingAiChat;
    });
}

document.addEventListener('DOMContentLoaded', loadOptions);