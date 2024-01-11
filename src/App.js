import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep(step - 1);
  }

  function handleNext() {
    setStep(step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
