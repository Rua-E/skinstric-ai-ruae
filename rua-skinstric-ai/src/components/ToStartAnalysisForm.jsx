import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ToStartAnalysisForm() {
  const questions = [
    { id: 1, text: "Introduce Yourself" },
    { id: 2, text: "Where Are You From?" },
    // MUST DISPLAY THE ANSWER TO THE SECTION QUESTION
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Process the answer
    console.log(
      `Answer to "${questions[currentQuestionIndex].text}": ${answer}`
    );

    // Move to the next question or complete the form
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer(""); // Clear the input for the next question
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      <form
        className="relative z-10"
        action="javascript:throw new Error('React form unexpectedly submitted.')"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center"></div>
        <input
          className="text-5xl sm:text-6xl font-light text-center bg-transparent border-b border-black focus:outline-none appearance-none w-[460px] sm:w-[460px] pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10"
          type="text"
          autoComplete="off"
          autoFocus="name"
          value={answer}
          onChange={handleAnswerChange}
          placeholder={questions[currentQuestionIndex].text}
        />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ToStartAnalysisForm;
