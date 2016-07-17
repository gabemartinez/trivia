import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Title extends Component {

  render() {

    return (

      <div className="row">

        <div className="col-md-12">
          <h2>{this.props.title[0].title}</h2>
        </div>

      </div>

    )

  }

}

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(Title)
