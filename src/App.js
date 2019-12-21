import React from 'react';
import logo from './logo_text.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="Logo" />
        <a className="Button">로그인</a>
        <span> 아직 회원가입을 안하셨나요? <a>회원가입</a></span>
      </header>
    </div >
  );
}

export default App;