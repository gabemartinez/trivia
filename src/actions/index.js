//submit and check answer
export function submitAnswer(submittedanswer) {

  return {

    type: 'SUBMIT_ANSWER',
    submittedanswer: 2

  }

}

//go to next question
export function nextQuestion() {

  //console.log('next question mofo')
  //nextQuestion is an action creator that will return an object that is the actual action
  return {

    type: 'NEXT_QUESTION'

  }

}
