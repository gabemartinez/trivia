import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nextQuestion} from '../actions'
import {bindActionCreators} from 'redux'

class Buttons extends Component {
  render() {
    let thisquestionid = this.props.questionAnswer.activeQuestionId
    return (
        <div className="col-md-8 no-left-padding">
          <button onClick={() => this.props.nextQuestion(thisquestionid)} type="button" className={`btn btn-${this.props.questionAnswer.nextButtonColor}`} disabled={this.props.questionAnswer.nextButtonDisabled}>
            Next Question <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
          </button>
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
    nextQuestion: nextQuestion
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
