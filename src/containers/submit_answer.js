import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nextQuestion} from '../actions'
import {bindActionCreators} from 'redux'

class SubmitAnswer extends Component {
  render() {
    return (
        <div className="col-md-8 no-left-padding">
          <button onClick={this.props.nextQuestion} type="button" className="btn btn-danger" disabled={this.props.questionAnswer.nextButtonDisabled}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswer)
