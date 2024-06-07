import { useContext } from "react";
import { QuizContext } from "../context/QuizContextProvider";
export const useQuizHook = () => {
  return useContext(QuizContext);
};
