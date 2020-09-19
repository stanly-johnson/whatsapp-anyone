import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
const BASE_URL = 'https://wa.me/';

function App() {
  const [number, setNumber] = useState('');

  const handleSubmit = (evt) => {
    if (number === undefined) {
      return;
    }
    evt.preventDefault();
    // let output = number.replace(/[^+\d]+/g, "");
    window.open(BASE_URL + number);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <h2>WhatsApp Anyone!</h2>
        <p>Message anyone without saving to contacts.</p>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
          </label>
          <input type="submit" value="Send" />
        </form>
        <br />
        <p class="small">Enter number including country code and hit Send</p>
        <br />
        <p className="small">
          <a href="https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=kk">How does it work?</a>
        </p>
        <br />
        <p className="small-footer">
          <a href="https://github.com/stanly-johnson/WhatsApp-Anyone">Powered by OpenSource | View code on Github</a>
        </p>
      </header>
    </div>
  );
}

export default App;
