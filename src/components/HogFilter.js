import React from 'react'

class HogFilter extends React.Component {


  render() {
    return (
      <div className="navWrapper">
        <div className="field">
        {"Filter "}
          <select name="type" id="type" onChange={this.props.setFilter}>
            <option value="all">All</option>
            <option value="greased">Greased</option>
            <option value="unGreased">Ungreased</option>
          </select>
        </div>
      </div>
    )
  }
}

export default HogFilter
