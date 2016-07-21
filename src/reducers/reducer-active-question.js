export default function(state=0, action) {

  switch (action.type) {
    case 'NEXT_QUESTION_BUTTON_CLICKED':
    console.log(state, action)
    return state +=1
    break
  }

  return state

}
