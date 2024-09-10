// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch');
    const lighthouse = document.getElementById('lighthouse');
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const toggleIndicator = document.querySelector('.toggle-indicator');
    
    // 초기 상태 설정
    if (switchInput.checked) {
        lighthouse.src = 'images/lighthouse_on.png';
    } else {
        lighthouse.src = 'images/lighthouse_off.png';
    }

    // 스위치 상태 변경에 따라 이미지 전환
    switchInput.addEventListener('change', function() {
        if (switchInput.checked) {
            lighthouse.src = 'images/lighthouse_on.png';
            lighthouse.style.opacity = 1;
        } else {
            lighthouse.src = 'images/lighthouse_off.png';
            lighthouse.style.opacity = 0.5;
        }
    });
});

document.getElementById('submitBtn').addEventListener('click', function() {
    const link = document.getElementById('link').value;
    const reason = document.getElementById('reason').value;
    const resultMessage = document.getElementById('resultMessage');

    const data = {
        link: link,
        from_column: "anonymous",
        reason: reason,
        frequency: 1
    };

    fetch('https://api.jowonjae.kro.kr/sites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            resultMessage.textContent = '데이터가 성공적으로 전송되었습니다.';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = '데이터 전송에 실패했습니다.';
            resultMessage.style.color = 'red';
        }
        resultMessage.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        resultMessage.textContent = '서버와의 통신 중 오류가 발생했습니다.';
        resultMessage.style.color = 'red';
        resultMessage.style.display = 'block';
    });
});