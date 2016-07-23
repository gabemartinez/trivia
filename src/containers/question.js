import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Question extends Component {
  render() {
    return (
        <div className="col-md-4">
          <h3>Question ({this.props.questionAnswer.activeQuestionId+1}/{this.props.quizQuestions.length})</h3>
          <p className={`question-text ${this.props.questionAnswer.fireQuestionAnimation}`}>
            {this.props.quizQuestions[this.props.questionAnswer.activeQuestionId].question}
          </p>
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

export default connect(mapStateToProps)(Question)
