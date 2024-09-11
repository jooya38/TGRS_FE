// // JavaScript 파일 형식으로 변환된 코드
// function createReport() {
//     // 기본 div 컨테이너 생성
//     const container = document.createElement('div');
  
//     // h3 요소 생성
//     const header3 = document.createElement('h3');
//     header3.classList.add('SUITE');
//     header3.style.textAlign = 'left';
//     header3.style.marginTop = '6px';
//     header3.style.marginLeft = '10px';
//     header3.innerHTML = '딱걸렸어 <span style="color: rgba(255, 77, 77, 1)">경고 팝업</span>';
//     container.appendChild(header3);
  
//     // 이미지 생성
//     const img = document.createElement('img');
//     img.src = 'images/report_boat.png';
//     img.alt = 'Reporter';
//     container.appendChild(img);
  
//     // h1 요소 생성
//     const header1 = document.createElement('h1');
//     header1.classList.add('text-7xl', 'font-bold', 'underline', 'SUITE');
//     header1.innerHTML = '<span style="color: rgba(255, 77, 77, 1)">사기 의심 사이트</span>';
//     container.appendChild(header1);
  
//     // popup-body 생성
//     const popupBody = document.createElement('div');
//     popupBody.classList.add('popup-body');
//     popupBody.innerHTML = `
//       <p>
//         신고자: <span id="from" class="report-type">신고자</span><br>
//         신고 사유: <span id="reason" class="report-details">사기 사유</span><br>
//         신고 횟수: <span id="frequency">횟수</span>
//       </p>`;
//     container.appendChild(popupBody);
  
//     // popup-footer 생성
//     const popupFooter = document.createElement('div');
//     popupFooter.classList.add('popup-footer');
//     popupFooter.innerHTML = `
//       <a href="#" class="btn btn-primary">안전한 페이지로 돌아가기</a>
//       <a href="#" class="btn btn-secondary">링크 신뢰 후 계속 진행하기 (권장하지 않음)</a>
//     `;
//     container.appendChild(popupFooter);
  
//     // 입력란 컨테이너 생성
//     const inputContainer = document.createElement('div');
//     inputContainer.classList.add('input-container');
  
//     const linkLabel = document.createElement('label');
//     linkLabel.setAttribute('for', 'link');
//     linkLabel.textContent = '신고 유형:';
//     inputContainer.appendChild(linkLabel);
  
//     const linkInput = document.createElement('input');
//     linkInput.type = 'text';
//     linkInput.id = 'link';
//     linkInput.placeholder = '물품 사기, 배송 안 됨, 개인정보 요구 등...';
//     linkInput.required = true;
//     inputContainer.appendChild(linkInput);
  
//     const reasonLabel = document.createElement('label');
//     reasonLabel.setAttribute('for', 'reason');
//     reasonLabel.textContent = '상세 내용:';
//     inputContainer.appendChild(reasonLabel);
  
//     const reasonInput = document.createElement('input');
//     reasonInput.type = 'text';
//     reasonInput.id = 'reason';
//     reasonInput.placeholder = '짧게 50자 이내로 작성해주세요.';
//     reasonInput.required = true;
//     inputContainer.appendChild(reasonInput);
  
//     // 버튼 생성
//     const submitButton = document.createElement('button');
//     submitButton.id = 'submitBtn';
//     submitButton.textContent = '신고 접수 보내기';
    
//     // 클릭 이벤트 핸들러 추가
//     submitButton.addEventListener('click', () => {
//       alert('신고 접수가 완료되었습니다.');
//     });
  
//     inputContainer.appendChild(submitButton);
  
//     container.appendChild(inputContainer);
  
//     // 생성된 요소들을 body에 추가
//     document.body.appendChild(container);
//   }
  
//   // 페이지가 로드될 때 createReport 함수를 호출
//   window.onload = createReport;
  