import React, { useState } from 'react';
import './popup.css';  // 스타일 파일 import
// import FontAwesome from '@expo/vector-icons/FontAwesome'; //home btn
import { FaHome } from 'react-icons/fa'; // FontAwesome에서 홈 아이콘 가져오기

const Report = () => {
  // React에서 상태 관리 (예: 제출 결과 메시지 관리)
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = () => {
    // 제출 버튼 클릭 시 처리할 로직
    setResultMessage('신고 접수가 완료되었습니다.');
  };

  return (
    <div>
      <h3 className="SanTokki" style={{ textAlign: 'left', marginTop: '6px', marginLeft: '10px' }}>
        딱걸렸어 <span style={{ color: rgb(197, 187, 255) }}>신고 페이지</span>
      </h3>
      <button onClick={() => alert('홈 버튼 클릭됨!')} style={{ backgroundColor: 'transparent', border: 'none' }}>
        <FaHome size={24} color="white" />
      </button>

      <img src="images/report_boat.png" alt="Reporter" />

      <h1 className="text-7xl font-bold underline SUITE">
        사기 / 스캠 <span style={{ color: rgb(197, 187, 255) }}>신고하기</span>
      </h1>

      {/* 입력란 추가 */}
      <div className="input-container">
        <label htmlFor="link">신고 유형:</label>
        <input type="text" id="link" placeholder="물품 사기, 배송 안 됨, 개인정보 요구 등..." required /><br />

        <label htmlFor="reason">상세 내용:</label>
        <input type="text" id="reason" placeholder="짧게 50자 이내로 작성해주세요." required /><br />

        <button id="submitBtn" onClick={handleSubmit}>신고 접수 보내기</button>

        {/* 전송 결과를 표시할 요소 */}
        <p id="resultMessage" style={{ display: resultMessage ? 'block' : 'none' }}>
          {resultMessage}
        </p>
      </div>

      
    </div>
  );
};

export default Report;  