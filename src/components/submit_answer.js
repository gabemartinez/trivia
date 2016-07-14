import React, {Component} from 'react'

class SubmitAnswer extends Component {

  onClickSubmitAnswer(event) {
    console.log(event)
  }

  render() {

    return (

      <div className="row">

        <div className="col-md-8 col-md-offset-4">
          <button onClick={this.onClickSubmitAnswer} type="button" className="btn btn-danger">Submit Answer</button>
        </div>

      </div>

    )

  }

}

export default SubmitAnswer
