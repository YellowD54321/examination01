import "./exam01.css";
import React, { useState, useEffect, useRef } from "react";

function Exam01() {
  const [finalResult, setFinalResult] = useState(0);
  const inputText = useRef(null);

  function formular(lastNumber) {
    let result = 0;
    for (let i = 1; i <= lastNumber; i++) {
      const nextNumber = i % 2 === 0 ? -1 * i : i;
      result += nextNumber;
    }
    return result;
  }

  // function formularTwo(lastNumber) {
  //   if (lastNumber <= 0) return 0;
  //   if (lastNumber % 2 === 0) {
  //     return (-1 * lastNumber) / 2;
  //   } else {
  //     return (-1 * (lastNumber - 1)) / 2 + lastNumber;
  //   }
  // }

  function isNumber(data) {
    return Number.isInteger(data);
  }

  function handleButtonClick() {
    const value = parseInt(inputText.current.value, 10);
    if (!isNumber(value)) {
      setFinalResult("Input is not integer.");
    } else {
      setFinalResult(formular(value));
    }
  }

  return (
    <div className="exam01-body">
      <div className="exam01-input-region">
        <input className="exam01-input" ref={inputText} />
        <button className="exam01-button" onClick={handleButtonClick}>
          Start Calculating
        </button>
      </div>
      <div className="exam01-result">Result: {finalResult}</div>
    </div>
  );
}
export default Exam01;
