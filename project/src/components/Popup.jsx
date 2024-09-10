import React from 'react';
import './Popup.css';

const Popup = () => {
    return (
        <div>
            <h1 className="text-7xl font-bold underline">딱걸렸어</h1>
            <div className="wrapper">
                <input type="checkbox" id="switch" defaultChecked={true} />
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn"></span>
                </label>
            </div>
        </div>
    );
};

export default Popup;