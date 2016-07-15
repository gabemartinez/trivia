import React, { Component } from 'react';
import QuestionAnswers from './question_answers'
import Score from './score'
import SubmitAnswer from './submit_answer'

export default class App extends Component {

  render() {
    return (
      <div className="container well">

        <div className="row">

          <div className="col-md-12">
            <h2>Trivia Title</h2>
          </div>

        </div>

        <QuestionAnswers />

        <SubmitAnswer />

        <Score />

      </div>
    );
  }

}
