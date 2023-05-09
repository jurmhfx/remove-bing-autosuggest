(function () {
  function hideBingMainSearch() {
      const qfcElement = document.querySelector('.qfc');
      if (qfcElement) {
          qfcElement.style.display = 'none';
      }
  }

  function hideBingAiChat() {
      const serpElement = document.querySelector('cib-serp');
      if (!serpElement) {
          return;
      }

      const firstShadowRoot = serpElement.shadowRoot;
      const actionBarElement = firstShadowRoot.querySelector('#cib-action-bar-main');
      const secondShadowRoot = actionBarElement.shadowRoot;
      const autosuggestElement = secondShadowRoot.querySelector('.autosuggest');

      if (autosuggestElement) {
          autosuggestElement.style.display = 'none';
      }
  }

  function hideElements() {
      chrome.storage.sync.get(['bingMainSearch', 'bingAiChat'], (items) => {
          if (items.bingMainSearch) {
              hideBingMainSearch();
          }

          if (items.bingAiChat) {
              hideBingAiChat();
          }
      });
  }

  // Set up a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutationsList, observer) => {
      hideElements();
  });

  // Observe the entire document and its subtree for changes
  observer.observe(document, { childList: true, subtree: true });
})();
