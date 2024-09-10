import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold underline">딱걸렸어</h1>
      <div className="wrapper">
          <input type="checkbox" id="switch" defaultChecked={true} />
          <label htmlFor="switch" className="switch_label">
              <span className="onf_btn"></span>
          </label>
      </div>
      <div className="toggle-button-container">
        <div id="toggleButton" className="toggle-button">
          <div className="toggle-indicator"></div>
          <a href="popup.html" className="toggle-option active">홈</a>
          <a href="settings.html" className="toggle-option">설정</a>
          <a href="report.html" className="toggle-option">신고</a>
        </div>
      </div>
      <div>
        <input>
        </input>
      </div>
    </div>
  );
};

export default App;
