// required when isolated modules is turned on
export {};

chrome.runtime.onInstalled.addListener(() => {
  console.log("[SW] chrome.runtime.onInstalled");
});

chrome.webNavigation.onCompleted.addListener((details) => {
  console.log("[SW] chrome.webNavigation.onCompleted", details.url);
});
