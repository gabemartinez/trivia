export const selectAnswer = (answer) => {
  console.log('you clicked on select answer: ', answer.id)
  return {
    type: 'ANSWER_SELECTED',
    payload: {
      submittedanswertext: answer.answer,
      submittedansweranswerid: answer.id
    }
  }
}

//--

export const nextQuestion = (state) => {
  console.log('you clicked on next question button: ', state)
  return {
    type: 'NEXT_QUESTION_BUTTON_CLICKED',
    payload: state
  }
}
