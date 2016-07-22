const initialState = {
  nextButtonDisabled: true,
  activeQuestionId: 0,
  correctAnswers: 0,
  totalQuizQuestions: 4,
  nextButtonColor: 'danger'
}

export default function(state = initialState, action) {

  switch (action.type) {

    case 'ANSWER_SELECTED':
      let submittedAnswerId = action.answer.id
      let correctAnswerId = action.correctanswer
      //console.log(correctAnswerId)

      //if answer is correct increment correct answers
      if (submittedAnswerId === correctAnswerId) {
        return {...state,
          correctAnswers: state.correctAnswers+=1,
          nextButtonDisabled: false,
          nextButtonColor: 'success'
        }
      }
      //if answer is not correct do not increment
        return {...state,
          submittedAnswerId: submittedAnswerId,
          nextButtonDisabled: false,
          nextButtonColor: 'success'
        }

    //if next button is clicked
    case 'NEXT_QUESTION_BUTTON_CLICKED':
        return {...state,
          activeQuestionId: state.activeQuestionId+=1,
          nextButtonDisabled: true,
          nextButtonColor: 'danger'
        }

    default:
      return state

  }

}
