chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "openPopup // not using anymore") {
        chrome.windows.create({
            url: chrome.runtime.getURL("warning.html"),
            type: "popup",
            width: 400,
            height: 300
        });
    }
});

chrome.runtime.onInstalled.addListener(() => {
    console.log("딱걸렸어가 설치되며 작동을 시작했습니다!");
  });
  
  // 예: 브라우저 액션 클릭 시 팝업 표시
  chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: 'showPopup' });
  });