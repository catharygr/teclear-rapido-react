import React from "react";

function useTeclador() {
  const [form, setForm] = React.useState("");
  const [wordCount, setWordCount] = React.useState(0);
  const [time, setTime] = React.useState(10);
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
    setTime(10);
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

  return {
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
  };
}
export default useTeclador;
