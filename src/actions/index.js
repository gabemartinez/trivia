export const submitAnswer = (state) => {
  console.log('you clicked on submit button: ', state)
  return {
    type: 'SUBMIT_ANSWER_CLICKED',
    payload: state
  }
}

//--

export function nextQuestion() {
  return {
    type: 'NEXT_QUESTION'
  }
}
