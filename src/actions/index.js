export const selectAnswer = (answer, correctanswer) => {
  console.log('ANSWER CLICKED ID: ', answer, correctanswer)
  return {
    type: 'ANSWER_SELECTED',
    answer,
    correctanswer
  }
}

//--

export const nextQuestion = (thisquestionid) => {
  console.log('NEXT QUESTION BUTTON CLICKED!', thisquestionid)
  return {
    type: 'NEXT_QUESTION_BUTTON_CLICKED',
    thisquestionid,
  }
}
