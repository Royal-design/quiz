import "./question.scss";
import { useState } from "react";

import { QuestionList } from "../questionList/QuestionList";
import { ButtonComponent } from "../buutons/Button";
import { Result } from "../result/Result";
import { Box, Container, Heading, List, Text } from "@chakra-ui/react";

type textType = {
  text: string;
};
type QuestionType = {
  question: textType;
  choices: string[];
  correctAnswer: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  data: object[];
};

export const Question = ({
  question,
  data,
  choices,
  correctAnswer,
  currentQuestion,
  setCurrentQuestion
}: QuestionType) => {
  const [itemIndex, setItemIndex] = useState(null);
  const [option, setOption] = useState("");
  const [result, setResult] = useState({ score: 0 });
  const [correctBg, setCorrectBg] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const choiceClick = (index: any, choice: string) => {
    setOption(choice);
    setItemIndex(index);
    setCorrectBg(true);
    if (choice === correctAnswer) {
      setResult({ score: result.score + 1 });
    }
  };
  console.log(option);

  const btnNextClick = () => {
    if (currentQuestion !== data.length - 1) {
      setItemIndex(null);
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }

    setCorrectBg(false);
  };
  console.log(`score: ${result.score}`);

  const btnPrevClick = () => {
    setShowResult(false);
    setCorrectBg(true);
    setCurrentQuestion((prev) => prev - 1);
  };
  return (
    <Container
      className="question-container"
      display="flex"
      flexDir="column"
      alignItems="center"
      height="100%"
      padding="2rem"
      backgroundColor="grey"
      boxShadow="md"
    >
      <Box>
        {showResult ? (
          <Result result={result} data={data} />
        ) : (
          <>
            <Text
              color="white"
              textAlign="center"
              fontSize="1.2rem"
              className="question-number"
            >
              Question {currentQuestion + 1}/{data.length}
            </Text>
            <Heading
              as="h4"
              size="md"
              className="question-text"
              color="white"
              pt="1rem"
              pb="1rem"
            >
              {question.text.trim()}
            </Heading>
            <List padding="2rem" className="question-list">
              {choices.map((choice, i) => (
                <QuestionList
                  key={i}
                  choice={choice.trim()}
                  itemIndex={itemIndex}
                  choiceClick={choiceClick}
                  index={i}
                  correctBg={correctBg}
                  correctAnswer={correctAnswer}
                />
              ))}
            </List>
            <ButtonComponent
              currentQuestion={currentQuestion}
              btnNextClick={btnNextClick}
              btnPrevClick={btnPrevClick}
              data={data}
            />
          </>
        )}
      </Box>
    </Container>
  );
};
