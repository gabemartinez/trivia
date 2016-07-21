import React, {Component} from 'react'
import NextQuestionButton from '../containers/next_question_button'

class Buttons extends Component {

  render() {
    return (
        <div className="col-md-8 no-left-padding">
          <NextQuestionButton />
        </div>
    )
  }

}

export default Buttons
