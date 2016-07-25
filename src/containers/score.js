import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Score extends Component {
  render() {

      let thisquestionid = this.props.questionAnswer.activeQuestionId
      let totalquizquestions = this.props.quizQuestions.length
      let correctanswers = this.props.questionAnswer.correctAnswers
      let nextbuttonhidden = this.props.questionAnswer.nextButtonHidden

    if (nextbuttonhidden === false) {

      if (thisquestionid === totalquizquestions-1) {

        return (
          <div className="row">
            <div className="col-md-8 col-md-offset-4">
              <hr />
              <h3>Score</h3>
              <h2 className={`score-text ${this.props.questionAnswer.fireScoreAnimation}`}>You got {this.props.questionAnswer.correctAnswers} out of {this.props.quizQuestions.length} right!</h2>
              <p className={`question-text ${this.props.questionAnswer.fireScoreAnimation}`}>
                {/*{this.props.questionAnswer.totalQuizQuestions>0 ? Math.floor((this.props.questionAnswer.correctAnswers/this.props.questionAnswer.totalQuizQuestions)* 100) : 0}%*/}
              </p>
            </div>
          </div>
        )

    } else {

        return (
          null
        )

    }

  } else {
    return null
  }

  }
}

function mapStateToProps(state) {
  return {
    quizQuestions: state.quizQuestions,
    questionAnswer: state.questionAnswer
  }
}

export default connect(mapStateToProps)(Score)
