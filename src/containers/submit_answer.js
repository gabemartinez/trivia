import React, {Component} from 'react'
import {connect} from 'react-redux'
import {nextQuestion} from '../actions'
import {bindActionCreators} from 'redux'

class SubmitAnswer extends Component {
  render() {
    return (
        <div className="col-md-8 no-left-padding">
          <button onClick={this.props.nextQuestion} type="button" className="btn btn-success">
            Next Question <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
          </button>
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
    nextQuestion: nextQuestion},
    dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswer)
