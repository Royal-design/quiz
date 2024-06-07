import { ReactElement, createContext } from "react";
import useSWR from "swr";
import { endpoint } from "../api/quizApi";
import { getQuiz } from "../api/quizApi";

type QuizType = {
  id: string;
  question: { text: string };
  incorrectAnswers: string[];
  correctAnswer: string;
  type: string;
};

type useQuizType = {
  isLoading: boolean;
  data: QuizType[];
  error: boolean;
};

const useQuizState: any = {};

export const QuizContext = createContext<useQuizType>(useQuizState);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};
export const QuizContextProvider = ({ children }: ChildrenType) => {
  const { data, error, isLoading } = useSWR(endpoint, getQuiz);
  return (
    <QuizContext.Provider value={{ isLoading, error, data }}>
      {children}
    </QuizContext.Provider>
  );
};
