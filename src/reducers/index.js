import { combineReducers } from 'redux'
import TitleReducer from './reducer-title'
import QuestionReducer from './reducer-questions'
import ActiveQuestion from './reducer-active-question'
import SubmitAnswer from './reducer-submit-answer'

const rootReducer = combineReducers({
  title: TitleReducer,
  questions: QuestionReducer,
  activeQuestion: ActiveQuestion,
  submitAnswer: SubmitAnswer,
});

export default rootReducer;
