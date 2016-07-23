import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nextQuestion, tryAgain} from '../actions'
import {bindActionCreators} from 'redux'

class Buttons extends Component {
  render() {
    let thisquestionid = this.props.questionAnswer.activeQuestionId
    let totalquizquestions = this.props.quizQuestions.length
    let nextbuttonhidden = this.props.questionAnswer.nextButtonHidden

    if (nextbuttonhidden === false) {

      if (thisquestionid === totalquizquestions-1) {

        return (
          <div>

            {/*<div className="col-md-8 no-left-padding">
              <button type="button" className="btn btn-danger" disabled={true}>
                Next Question <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
              </button>
            </div>*/}

            <div className="col-md-8 no-left-padding try-again-container">
              <button onClick={() => this.props.tryAgain()} type="button" className="btn btn-warning" disabled={false}>
                Try Again? <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
              </button>
            </div>

          </div>
        )

      } else {

        return (
            <div className="col-md-8 no-left-padding">
              <button onClick={() => this.props.nextQuestion(thisquestionid)} type="button" className={`btn btn-${this.props.questionAnswer.nextButtonColor}`} disabled={this.props.questionAnswer.nextButtonDisabled}>
                Next Question <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
              </button>
            </div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextQuestion: nextQuestion,
    tryAgain: tryAgain
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
