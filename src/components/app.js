import React, { Component } from 'react';

export default class App extends Component {

  onClickSubmitButton() {
    console.log("I've been clicked!")
  }

  render() {
    return (
      <div className="container well">

        <div className="row">

          <div className="col-md-12">
            <h2>Trivia</h2>
          </div>

        </div>

        <div className="row">

          <div className="col-md-4">
            <h3>Question (1/5)</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?</p>
          </div>

          <div className="col-md-8">

            <h3>Answers</h3>

            <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" />
                 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.
               </label>
             </div>
             <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                 Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.
               </label>
             </div>
             <div className="radio">
               <label>
                 <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                 Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.
               </label>
             </div>

          </div>

        </div>

        <div className="row">

          <div className="col-md-8 col-md-offset-4">
            <button onClick={this.onClickSubmitButton} type="button" className="btn btn-danger">Submit Answer</button>
          </div>

        </div>

        <div className="row">

          <div className="col-md-8 col-md-offset-4">
            <hr />
            <h4>Score</h4>
          </div>

        </div>

      </div>
    );
  }

}
