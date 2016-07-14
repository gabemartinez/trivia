import React, { Component } from 'react';
import QuestionAnswers from './question_answers'
import Score from './score'
import SubmitAnswer from './submit_answer'

export default class App extends Component {

  render() {
    return (
      <div className="container well">

        <QuestionAnswers />

        <SubmitAnswer />

        <Score />

      </div>
    );
  }

}
