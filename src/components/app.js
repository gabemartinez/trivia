import React, { Component } from 'react'
import Question from '../containers/question'
import Answers from './answers'
import Score from './score'

export default class App extends Component {
  render() {
    return (
      <div className="container well">
        <div className="row">
          <div className="col-md-12">
            <h2>QUIZ TITLE GOES HERE</h2>
          </div>
        </div>
        <div className="row">
          <Question />
          <Answers />
        </div>
        <Score />
      </div>
    )
  }
}
