import { combineReducers } from 'redux'
import TitleReducer from './reducer-title'
import QuestionReducer from './reducer-questions'

const rootReducer = combineReducers({
  title: TitleReducer,
  questions: QuestionReducer
});

export default rootReducer;
