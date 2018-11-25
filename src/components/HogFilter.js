import React from 'react'

class HogFilter extends React.Component {


  render() {
    return (
      <div className="ui form">
        <h3>Filter</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => console.log(event)}>
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
