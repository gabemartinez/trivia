//state arg is not application state, only the state that this reducer is responsible for
export default function(state=[], action) {

  switch (action.type) {
    case 'SUBMIT_ANSWER':
    console.log(state, action)
  }

  return state

}
