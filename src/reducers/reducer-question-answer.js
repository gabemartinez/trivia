const initialState = {
  nextButtonDisabled: true,
  activeQuestionId: 0,
  correctAnswers: 0,
  totalQuizQuestions: 0,
  nextButtonColor: 'danger'
}

export default function(state = initialState, action) {

  switch (action.type) {

    //ANSWER_SELECTED CASE
    case 'ANSWER_SELECTED':
      let submittedAnswerId = action.answer.id
      let correctAnswerId = action.correctanswer
      let totalQuizQuestions = action.totalquizquestions
      //console.log(correctAnswerId)

      //if answer is correct increment correct answers
      if (submittedAnswerId === correctAnswerId) {
        return {...state,
          correctAnswers: state.correctAnswers+=1,
          nextButtonDisabled: false,
          nextButtonColor: 'success',
          totalQuizQuestions: totalQuizQuestions
        }
      }

      //if answer is not correct do not increment
        return {...state,
          nextButtonDisabled: false,
          nextButtonColor: 'success',
          totalQuizQuestions: totalQuizQuestions
        }
    //ANSWER_SELECTED CASE

    //NEXT_QUESTION_BUTTON_CLICKED CASE
    case 'NEXT_QUESTION_BUTTON_CLICKED':
        return {...state,
          activeQuestionId: state.activeQuestionId+=1,
          nextButtonDisabled: true,
          nextButtonColor: 'danger'
        }
    //NEXT_QUESTION_BUTTON_CLICKED CASE

    //TRY_AGAIN_BUTTON_CLICKED CASE
    case 'TRY_AGAIN_BUTTON_CLICKED':
        return {
            nextButtonDisabled: true,
            activeQuestionId: 0,
            correctAnswers: 0,
            totalQuizQuestions: 0,
            nextButtonColor: 'danger'
        }
    //TRY_AGAIN_BUTTON_CLICKED CASE

    default:
      return state

  }

}
