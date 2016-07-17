import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Question extends Component {

  render() {

    return (

        <div className="col-md-4">

          <h3>Question (1/{this.props.questions.length})</h3>

          <p>{this.props.questions[0].question}</p>

        </div>

    )

  }

}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Question)
