import React, {Component} from 'react'

class SubmitAnswer extends Component {

  render() {

    return (

        <div className="col-md-8 no-left-padding">

          <button type="button" className="btn btn-danger">Submit Answer</button>
          <button type="button" className="btn btn-info">Next Question</button>

        </div>

    )

  }

}

export default SubmitAnswer
