import React, {Component} from 'react'
import Answer from '../containers/answer'
import SubmitAnswer from '../containers/submit_answer'

class Answers extends Component {
  render() {
    return (
      <div className="col-md-8">
        <h3>Answers</h3>
        <h5>Click choice.</h5>
        <Answer />
        <SubmitAnswer />
      </div>
    )
  }
}

export default Answers
