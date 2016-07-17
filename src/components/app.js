import React, { Component } from 'react';
import Title from '../containers/title'
import Question from '../containers/question'
import Answers from './answers'
import Score from './score'

export default class App extends Component {

  render() {

    return (

      <div className="container well">

        <Title />

        <div className="row">

          <Question />

          <Answers />

        </div>

        <Score />

      </div>

    );

  }

}
