import React, { useState } from 'react';
import './warning.css';  // 스타일 파일 import
// import FontAwesome from '@expo/vector-icons/FontAwesome'; //home btn

const Report = () => {

  return (
    <div>
      <h3 className="SUITE" style={{ textAlign: 'left', marginTop: '6px', marginLeft: '10px' }}>
        딱걸렸어 <span style={{ color: rgba(255, 77, 77, 1)}}>경고 팝업업</span>
      </h3>

      <img src="images/lighthouse_on.png" alt="Lighthouse" />

      <h1 className="text-7xl font-bold underline SUITE">
        <span style={{ color: rgba(255, 77, 77, 1) }}>사기 의심 사이트</span>
      </h1>
      <div className='popup-body'>
        <p>신고자: <span id="from" class="report-type">신고자</span></p>
        <p>신고 사유: <span id="reason" class="report-details">사기 사유</span></p>
        <p>신고 횟수: <span id="frequency">횟수</span></p>
      </div>

      <div className='popup-footer'>
        <a htmlFor="#" class="btn btn-primary">안전한 페이지로 돌아가기</a>
        <a htmlFor="#" class="btn btn-secondary">링크 신뢰 후 계속 진행하기 (권장하지 않음)</a>
      </div>
    </div>
  );
};

export default Report;  