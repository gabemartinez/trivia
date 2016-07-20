import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Question extends Component {

  render() {

    return (

        <div className="col-md-4">

          <h3>Question ({this.props.activeQuestion+1}/{this.props.quizquestions.length})</h3>

          <p>{this.props.quizquestions[this.props.activeQuestion].question}</p>

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

export default connect(mapStateToProps)(Question)
