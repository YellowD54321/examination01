import "./App.css";
import Exam01 from "./components/exam01/Exam01";
import Exam02 from "./components/exam02/Exam02";
import React, { useState } from "react";

function App() {
  const [showBarExam, setShowBarExam] = useState({
    exam01: true,
    exam02: false,
  });
  const selectedClassName = "app-toggle-bar-exam-selected";
  function handleToggleBarClick(e) {
    const name = e.target.getAttribute("name");
    const allToggleBarExam = [
      ...document.getElementsByClassName("app-toggle-bar-exam"),
    ];
    allToggleBarExam.map((eachElement) => {
      eachElement.classList.remove(selectedClassName);
      setShowBarExam((preState) => {
        return {
          ...preState,
          [eachElement.getAttribute("name")]: false,
        };
      });
    });
    setShowBarExam((preState) => {
      return {
        ...preState,
        [name]: true,
      };
    });
    e.target.classList.add(selectedClassName);
  }
  return (
    <div className="app-body">
      <div className="app-toggle-bar">
        <div
          className="app-toggle-bar-exam app-toggle-bar-exam01 app-toggle-bar-exam-selected"
          name="exam01"
          onClick={handleToggleBarClick}
        >
          Exam01
        </div>
        <div
          className="app-toggle-bar-exam app-toggle-bar-exam02"
          name="exam02"
          onClick={handleToggleBarClick}
        >
          Exam02
        </div>
      </div>
      <div className="app-exams">
        {showBarExam.exam01 && <Exam01 />}
        {showBarExam.exam02 && <Exam02 />}
      </div>
    </div>
  );
}
export default App;
