export const selectAnswer = (answer, correctanswer) => {
  console.log('ANSWER CLICKED ID: ', correctanswer)
  return {
    type: 'ANSWER_SELECTED',
    answer,
    correctanswer
  }
}

//--

export const nextQuestion = (state) => {
  //console.log('NEXT QUESTION BUTTON CLICKED!')
  return {
    type: 'NEXT_QUESTION_BUTTON_CLICKED',
  }
}
