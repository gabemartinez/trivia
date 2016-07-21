import { combineReducers } from 'redux'
import QuizQuestions from './quizquestions'
import QuestionAnswer from './reducer-question-answer'

const rootReducer = combineReducers({
  quizQuestions: QuizQuestions,
  questionAnswer: QuestionAnswer,
})

export default rootReducer
