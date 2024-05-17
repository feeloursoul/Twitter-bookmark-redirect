chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "redirect-to-bookmarks",
    title: "ブックマークに移動",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "redirect-to-bookmarks") {
    chrome.tabs.update(tab.id, {url: "https://x.com/i/bookmarks"});
  }
});
