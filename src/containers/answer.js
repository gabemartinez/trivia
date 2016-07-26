import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectAnswer} from '../actions'

class Answer extends Component {

  answersList() {
    let correctanswer = this.props.quizQuestions[this.props.questionAnswer.activeQuestionId].correctanswerid
    let totalquizquestions = this.props.quizQuestions.length
    let nextbuttoncolor = this.props.questionAnswer.nextButtonColor
    let elsubmittedanswerid = this.props.questionAnswer.elSubmittedAnswerId
    return ( this.props.quizQuestions[this.props.questionAnswer.activeQuestionId].answers.map((answer) => {
        return (
          <li key={answer.id} className={ answer.id === elsubmittedanswerid ? 'list-group-item selected-answer' : 'list-group-item' } onClick={ nextbuttoncolor != 'success' ? () => this.props.selectAnswer(answer, correctanswer, totalquizquestions) : null } >
           {answer.answer}
          </li>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.answersList()}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    quizQuestions: state.quizQuestions,
    questionAnswer: state.questionAnswer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAnswer: selectAnswer
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer)
