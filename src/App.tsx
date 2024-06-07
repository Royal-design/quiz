import { useState } from "react";
import { useQuizHook } from "./hook/useQuizHook";
import { Question } from "./components/question/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { data } = useQuizHook();
  let content;

  if (data) {
    const { correctAnswer, incorrectAnswers, question } = data[currentQuestion];
    console.log(question.text);
    console.log(correctAnswer);

    const choices = [...incorrectAnswers, correctAnswer].sort((a, b) =>
      a < b ? -1 : 1
    );
    content = (
      <Question
        data={data}
        choices={choices}
        question={question}
        correctAnswer={correctAnswer}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    );
  }

  return <div className="app">{content}</div>;
}

export default App;
