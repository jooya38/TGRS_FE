const url = window.location.href;
console.log("Current tab URL: " + url);

function checkUrlWithServer(url) {
    return fetch(`https://api.jowonjae.kro.kr/joijui/sites?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            if (data.result === true) {  // 서버에서 true 응답을 받으면
                chrome.runtime.sendMessage({ action: "openPopup", data });
                createPopup(data);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

checkUrlWithServer(url);

function createPopup(data) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = chrome.runtime.getURL('tailwind.css');
    document.head.appendChild(style);

    const popup = document.createElement('div');
    popup.id = 'custom-popup';

    fetch(chrome.runtime.getURL('warning.html'))
        .then(response => response.text())
        .then(htmlContent => {
            popup.innerHTML = htmlContent;
            document.body.appendChild(popup);

            // 받은 데이터를 삽입
            document.getElementById('from').textContent = data.from;
            document.getElementById('reason').textContent = data.reason;
            document.getElementById('frequency').textContent = data.frequency;

            // 닫기 버튼 이벤트 리스너 추가
            document.querySelector('.btn-primary').addEventListener('click', () => {
                document.body.removeChild(popup);
            });

            // 무시 후 계속 진행하기 버튼 이벤트 리스너 추가
            document.querySelector('.btn-secondary').addEventListener('click', () => {
                document.body.removeChild(popup);
            });
        })
        .catch(error => console.error('Error loading warning.html:', error));
}

// 메시지를 받아 팝업을 생성
chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.action === 'showPopup') {
        createPopup(message.data);
    }
});