//state arg is not application state, only the state that this reducer is responsible for
export default function(state=null, action) {

  switch (action.type) {
    case 'SUBMIT_ANSWER_CLICKED':
    console.log(state, action)
    return action.payload
    break
  }

  return state

}
