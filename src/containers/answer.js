import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Answer extends Component {

  answersRadios() {
    let answergroupname = "answergroup_"+this.props.activeQuestion
    return (
      this.props.quizquestions[this.props.activeQuestion].answers.map((answer) => {
        return (
          <div key={answer.id} className="radio">
             <label>
               <input type="radio" name={answergroupname} id={answergroupname} value={answer.answer} />
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
    quizquestions: state.quizquestions,
    activeQuestion: state.activeQuestion
  }
}

export default connect(mapStateToProps)(Answer)
