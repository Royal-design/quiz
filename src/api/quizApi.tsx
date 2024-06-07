import axios from "axios";

const quizApi = axios.create({
  baseURL: "https://the-trivia-api.com/v2/"
});

export const endpoint = "questions?limit=5";

export const getQuiz = async () => {
  const quizzes = await quizApi.get(endpoint);
  return quizzes.data;
};
