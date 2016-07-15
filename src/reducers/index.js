import { combineReducers } from 'redux'
import QuestionReducer from './reducer-questions'

const rootReducer = combineReducers({
  //state: (state = {}) => state
  questions: QuestionReducer
});

export default rootReducer;
