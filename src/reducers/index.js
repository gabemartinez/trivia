import { combineReducers } from 'redux'
import QuizQuestions from './quizquestions'
import ActiveQuestion from './reducer-active-question'
import SubmitAnswer from './reducer-submit-answer'

const rootReducer = combineReducers({
  quizquestions: QuizQuestions,
  activeQuestion: ActiveQuestion,
  submitAnswer: SubmitAnswer,
})

export default rootReducer;
