import { combineReducers } from 'redux'
import QuizQuestions from './quizquestions'
import ActiveQuestion from './reducer-active-question'
import CheckAnswer from './reducer-check-answer'

const rootReducer = combineReducers({
  quizquestions: QuizQuestions,
  activeQuestion: ActiveQuestion,
  checkAnswer: CheckAnswer,
})

export default rootReducer
