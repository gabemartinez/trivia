export const selectAnswer = (answer, correctanswer, totalquizquestions) => {
  //console.log('ANSWER CLICKED ID: ', answer, correctanswer, totalquizquestions)
  return {
    type: 'ANSWER_SELECTED',
    answer,
    correctanswer,
    totalquizquestions
  }
}

//--

export const nextQuestion = (thisquestionid) => {
  //console.log('NEXT QUESTION BUTTON CLICKED!', thisquestionid)
  return {
    type: 'NEXT_QUESTION_BUTTON_CLICKED',
    thisquestionid,
  }
}

//--

export const tryAgain = () => {
  console.log('TRY AGAIN BUTTON CLICKED!')
  return {
    type: 'TRY_AGAIN_BUTTON_CLICKED',
  }
}
