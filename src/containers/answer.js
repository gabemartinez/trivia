import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Answer extends Component {

  answersRadios() {
    return (
      this.props.questions[0].answers.map((answer) => {
        return (

          <div key={answer.id} className="radio">
             <label>
               <input type="radio" name="answeradios" id={answer.id} />
               {answer.answer}
             </label>
           </div>

        )
      })
    )
  }

  render() {

    return (

      <div className="col-md-8">

        {this.answersRadios()}

      </div>

    )

  }

}

function mapStateToProps(state) {
  return {
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Answer)
