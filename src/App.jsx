import React from "react";

function App() {
  const [form, setForm] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [time, setTime] = React.useState(5);
  const [isTimeRunning, setIsTimeRunning] = React.useState(false);
  const [isformDisabled, setIsFormDisabled] = React.useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const formRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  function wordCounter(formValue) {
    const num = formValue
      .trim()
      .split(" ")
      .filter((palabra) => palabra !== "").length;
    setWordCount(num);
  }

  function startGame() {
    setForm("");
    setIsFormDisabled(false);
    setIsButtonDisabled(true);
    setTime(5);
    setWordCount(0);
    setIsTimeRunning(true);
  }

  function stopGame() {
    wordCounter(form);
    setIsFormDisabled(true);
    setIsButtonDisabled(false);
    setTimeout(() => {
      buttonRef.current.focus();
    }, 3000);
    setIsTimeRunning(false);
  }

  function handleForm(e) {
    setForm(e.target.value);
  }

  React.useEffect(() => {
    if (time > 0 && isTimeRunning) {
      formRef.current.focus();
      setTimeout(() => {
        setTime((oldTime) => oldTime - 1);
      }, 1000);
    } else if (time === 0) {
      stopGame();
    }
  }, [time, isTimeRunning]);

  return (
    <div className="container">
      <h1>Qué tan rápido puedes teclear?</h1>
      <textarea
        value={form}
        onChange={handleForm}
        disabled={isformDisabled}
        ref={formRef}
      />
      <h3>Tiempo restante: {time}</h3>
      <button
        autoFocus={true}
        disabled={isButtonDisabled}
        onClick={startGame}
        ref={buttonRef}
      >
        {isTimeRunning ? "Escribe" : "Comenzar"}
      </button>
      <h2>Palabras contada: {wordCount}</h2>
    </div>
  );
}

export default App;
