const initialState = {
  nextButtonDisabled: true,
  submittedAnswerId: 0,
  activeQuestionId: 0,
  correctAnswerId: 1,
  correctAnswers: 0,
  totalQuizQuestions: 4,
}

export default function(state = initialState, action) {
  switch (action.type) {

    case 'ANSWER_SELECTED':
      let submittedAnswerId = action.answer.id
      let correctAnswerId = action.correctanswer
      console.log(correctAnswerId)
      if (submittedAnswerId === correctAnswerId) {
        return {...state, correctAnswers: state.correctAnswers+=1, nextButtonDisabled: false }
      }
        return {...state, submittedAnswerId: submittedAnswerId, nextButtonDisabled: false }

    case 'NEXT_QUESTION_BUTTON_CLICKED':
        return {...state, activeQuestionId: state.activeQuestionId+=1, nextButtonDisabled: true }

    default:
      return state
  }

}
