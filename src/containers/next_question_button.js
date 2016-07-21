import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nextQuestion} from '../actions'
import {bindActionCreators} from 'redux'

class NextQuestionButton extends Component {

  render() {
    return (
      <button onClick={this.props.nextQuestion} type="button" className="btn btn-success">
        <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
      </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NextQuestionButton)
