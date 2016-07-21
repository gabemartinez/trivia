import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectAnswer} from '../actions'

class Answer extends Component {

  answersList() {
    return ( this.props.quizquestions[this.props.activeQuestion].answers.map((answer) => {
        return (
          <li key={answer.id} className="list-group-item" onClick={() => this.props.selectAnswer(answer)}>
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
    quizquestions: state.quizquestions,
    activeQuestion: state.activeQuestion
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAnswer: selectAnswer},
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer)
