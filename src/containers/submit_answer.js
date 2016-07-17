import React, {Component} from 'react'

class SubmitAnswer extends Component {

  submittedAnswer() {
    console.log('CLICKY!')
  }

  nextQuestion() {
    console.log('Next Question!')
  }

  render() {

    return (

        <div className="col-md-8 no-left-padding">

          <button onClick={this.submittedAnswer} type="button" className="btn btn-danger">Submit Answer</button>
          <button onClick={this.nextQuestion} type="button" className="btn btn-info">Next Question</button>

        </div>

    )

  }

}

export default SubmitAnswer
