import React from 'react';
import "./AuthButton.scss";

export default function AuthButton({handleButtonClick, text}) {
  return (
    <div className="main-form-login__auth" type="submit">
        <button type="submit" onClick={handleButtonClick}>{text}</button>
    </div>
  )
}
