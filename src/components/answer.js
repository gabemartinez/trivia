import React, {Component} from 'react'

class Answer extends Component {

  render() {

    return (

      <div className="col-md-8">

        <div className="radio">
           <label>
             <input type="radio" name="optionsRadios" id="optionsRadios1" />
             1
           </label>
         </div>
         <div className="radio">
           <label>
             <input type="radio" name="optionsRadios" id="optionsRadios2" />
             2
           </label>
         </div>
         <div className="radio">
           <label>
             <input type="radio" name="optionsRadios" id="optionsRadios3" />
             3
           </label>
         </div>
         <div className="radio">
           <label>
             <input type="radio" name="optionsRadios" id="optionsRadios3" />
             5
           </label>
         </div>

      </div>

    )

  }

}

export default Answer
