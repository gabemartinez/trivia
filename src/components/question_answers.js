import React, {Component} from 'react'

class QuestionAnswers extends Component {

  render() {

    return (

      <div>

        <div className="row">

          <div className="col-md-12">
            <h2>Trivia Title</h2>
          </div>

        </div>

        <div className="row">

          <div className="col-md-4">
            <h3>Question (1/5)</h3>
            <p>How many Sun Devils have received the Jack Nicklaus National Player of the Year Award?</p>
          </div>

          <div className="col-md-8">

            <h3>Answers</h3>

            <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" />
                 1
               </label>
             </div>
             <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                 3
               </label>
             </div>
             <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                 2
               </label>
             </div>
             <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                 5
               </label>
             </div>

          </div>

        </div>

      </div>

    )

  }

}

export default QuestionAnswers
