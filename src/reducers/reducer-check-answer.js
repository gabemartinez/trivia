export default function(state={}, action) {

  switch (action.type) {
    case 'ANSWER_SELECTED':
    console.log(state, action)
    return action.payload
    break
  }

  return state

}
