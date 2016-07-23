import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Score extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-4">
          <hr />
          <h3>Score</h3>
          <p className={`question-text ${this.props.questionAnswer.fireScoreAnimation}`}>
            {this.props.questionAnswer.totalQuizQuestions>0 ? Math.floor((this.props.questionAnswer.correctAnswers/this.props.questionAnswer.totalQuizQuestions)* 100) : 0}%
          </p>
        </div>
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

export default connect(mapStateToProps)(Score)
