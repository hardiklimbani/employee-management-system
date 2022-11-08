import React from 'react';
import "./login.css";

const index = ({onLogin}) => {
  return (
    <div className='mainBox'>
        <div className="box">
            <div className="form">
                <h2>Login</h2>
                <button className="button" onClick={onLogin}><span>LOGIN</span></button>
            </div>
        </div>
    </div>
  )
}

export default index