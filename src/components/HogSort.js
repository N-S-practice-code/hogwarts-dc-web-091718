import React from 'react'

class HogSort extends React.Component {


  render() {
    return (
      <div className="navWrapper">
        <div className="field">
        {"Sort "}
          <select name="type" id="type" onChange={this.props.setSort}>
            <option value="none">None</option>
            <option value="By Name">By Name</option>
            <option value="By Weight">By Weight</option>
          </select>
        </div>
      </div>
    )
  }
}

export default HogSort
