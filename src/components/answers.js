import React, {Component} from 'react'
import Answer from '../containers/answer'
import Buttons from '../containers/buttons'

class Answers extends Component {
  render() {
    return (
      <div className="col-md-8">
        <h3>Answers</h3>
        <h5>Click choice.</h5>
        <Answer />
        <Buttons />
      </div>
    )
  }
}

export default Answers
