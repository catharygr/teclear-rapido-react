import React from "react";
import useTeclador from "./useTeclador";

function App() {
  const {
    form,
    handleForm,
    isformDisabled,
    formRef,
    time,
    isButtonDisabled,
    startGame,
    buttonRef,
    isTimeRunning,
    wordCount,
  } = useTeclador();
  return (
    <div className="container">
      <h1>¿Qué tan rápido puedes teclear en 10s.?</h1>
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
