import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitAnswer} from '../actions'
import {bindActionCreators} from 'redux'

class SubmitAnswerButton extends Component {

  render() {
    return (
      <button onClick={this.props.submitAnswer} type="button" className="btn btn-info submit-button-style">
        Submit Answer
      </button>
    )
  }

}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({submitAnswer: submitAnswer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswerButton)
