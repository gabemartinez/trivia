import { combineReducers } from 'redux'
import TitleReducer from './reducer-title'
import QuestionReducer from './reducer-questions'
import ActiveQuestion from './reducer-active-question'

const rootReducer = combineReducers({
  title: TitleReducer,
  questions: QuestionReducer,
  activeQuestion: ActiveQuestion
});

export default rootReducer;
