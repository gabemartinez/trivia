const initialState = {
  nextButtonDisabled: true,
  nextButtonHidden: true,
  activeQuestionId: 0,
  correctAnswers: 0,
  totalQuizQuestions: 0,
  nextButtonColor: 'danger',
  fireQuestionAnimation: 'animated bounceIn',
  fireScoreAnimation: null
}

export default function(state = initialState, action) {

  switch (action.type) {

    //ANSWER_SELECTED CASE
    case 'ANSWER_SELECTED':
      let submittedAnswerId = action.answer.id
      let correctAnswerId = action.correctanswer
      let totalQuizQuestions = action.totalquizquestions
      //console.log(submittedAnswerId)

      //if answer is correct increment correct answers
      if (submittedAnswerId === correctAnswerId) {
        return {...state,
          correctAnswers: state.correctAnswers+=1,
          nextButtonDisabled: false,
          nextButtonHidden: false,
          nextButtonColor: 'success',
          totalQuizQuestions: totalQuizQuestions,
          fireQuestionAnimation: null,
          fireScoreAnimation: 'animated flash'
        }
      }

      //if answer is not correct do not increment
        return {...state,
          nextButtonDisabled: false,
          nextButtonHidden: false,
          nextButtonColor: 'success',
          totalQuizQuestions: totalQuizQuestions,
          fireQuestionAnimation: null,
          fireScoreAnimation: 'animated flipInX'
        }
    //ANSWER_SELECTED CASE

    //NEXT_QUESTION_BUTTON_CLICKED CASE
    case 'NEXT_QUESTION_BUTTON_CLICKED':
        return {...state,
          activeQuestionId: state.activeQuestionId+=1,
          nextButtonDisabled: true,
          nextButtonHidden: true,
          nextButtonColor: 'danger',
          fireQuestionAnimation: 'animated bounceIn',
          fireScoreAnimation: null
        }
    //NEXT_QUESTION_BUTTON_CLICKED CASE

    //TRY_AGAIN_BUTTON_CLICKED CASE RETURN TO INITIAL STATE
    case 'TRY_AGAIN_BUTTON_CLICKED':
        return {
            nextButtonDisabled: true,
            nextButtonHidden: true,
            activeQuestionId: 0,
            correctAnswers: 0,
            totalQuizQuestions: 0,
            nextButtonColor: 'danger',
            fireQuestionAnimation: 'animated bounceIn',
            fireScoreAnimation: null
        }
    //TRY_AGAIN_BUTTON_CLICKED CASE RETURN TO INITIAL STATE

    default:
      return state

  }

}
