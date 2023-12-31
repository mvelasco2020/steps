import logo from './logo.svg';
import { useState } from "react";
import './App.css';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1)


  function handleClick(btn) {
    if (btn === "next") {
      if (step < messages.length) {
        setStep(current => current + 1)
      }
    }
    else {
      if (step > 1) {
        setStep(current => current - 1)
      }
    }
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">Step {step}: {messages[step - 1]}.</p>
      <div className="buttons">
        <button style={{ backgroundColor: '#7959f2', color: '#fff' }}
          onClick={() => { handleClick("prev") }}
        >Previous</button>
        <button style={{ backgroundColor: '#7959f2', color: '#fff' }}
          onClick={() => { handleClick("next") }}
        >Next</button>
      </div>
    </div>
  );
}

export default App;
