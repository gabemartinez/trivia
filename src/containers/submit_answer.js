import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submitAnswer, nextQuestion} from '../actions'
import {bindActionCreators} from 'redux'

class SubmitAnswer extends Component {

  render() {

    return (

        <div className="col-md-8 no-left-padding">

          <button onClick={() => this.props.submitAnswer(state)} type="button" className="btn btn-info submit-button-style">
            Submit Answer
          </button>

          <button onClick={this.props.nextQuestion} type="button" className="btn btn-success">
            <span className="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>
          </button>

        </div>

    )

  }

}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({nextQuestion: nextQuestion, submitAnswer: submitAnswer}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAnswer)
