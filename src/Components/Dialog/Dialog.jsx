// Dialog.js
import React from 'react';
import './Dialog.css';

const Dialog = ({ children, onClose }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
{children}
      </div>
    </div>
  );
};

export default Dialog;
