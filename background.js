chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.storage.local.get(["blockedSites"], function (result) {
      let blockedSites = result.blockedSites || [];
      blockedSites.forEach((site) => {
        if (changeInfo.url.includes(site)) {
          chrome.tabs.remove(tabId);
        }
      });
    });
  }
});
