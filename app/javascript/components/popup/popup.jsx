import React from 'react';
import './popup.scss';


export const Popup = ({showPopup, setShowPopup}) => {
    return <> {showPopup ? <div>Modal</div> : null}</>;       
}