import "./questionlist.scss";
type ChoiceType = {
  choice: string;
  choiceClick: (index: number, choice: string) => void;
  itemIndex: any;
  index: number;
  correctBg: boolean;
  correctAnswer: string;
};

export const QuestionList = ({
  choice,
  choiceClick,
  index,
  itemIndex,
  correctBg,
  correctAnswer
}: ChoiceType) => {
  return (
    <>
      <button
        disabled={correctBg}
        className={`${
          itemIndex === index ? `question-background` : null
        } question-item ${
          correctBg && choice === correctAnswer ? "correct" : "question-item"
        }`}
        onClick={() => choiceClick(index, choice)}
      >
        <span
          className={`${
            itemIndex === index ? `question-circle-border` : null
          } question-circle ${
            correctBg && choice === correctAnswer ? "circle" : "question-circle"
          }`}
        >
          {" "}
        </span>{" "}
        {choice}
      </button>
    </>
  );
};
