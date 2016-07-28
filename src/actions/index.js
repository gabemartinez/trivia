export const selectAnswer = (answer, correctanswer, totalquizquestions, thisquestionid, elsubmittedanswerid) => {
  //console.log('ANSWER CLICKED ID: ', answer, correctanswer, totalquizquestions)
  ga('send', 'event', 'clas-widgets', 'interaction', 'quiz:20160727: Answer Selected - Question ID: '+thisquestionid+' Submitted Answer ID: '+answer.id+' Actual Answer ID: '+correctanswer+" RESULT: " + (answer.id===correctanswer ? "CORRECT" : "INCORRECT"))
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
  ga('send', 'event', 'clas-widgets', 'interaction', 'quiz:20160727: Next Button Clicked: Question - '+thisquestionid)
  return {
    type: 'NEXT_QUESTION_BUTTON_CLICKED',
    thisquestionid,
  }
}

//--

export const tryAgain = () => {
  //console.log('TRY AGAIN BUTTON CLICKED!')
  ga('send', 'event', 'clas-widgets', 'interaction', 'quiz:20160727: Try Again Button Clicked')
  return {
    type: 'TRY_AGAIN_BUTTON_CLICKED',
  }
}
