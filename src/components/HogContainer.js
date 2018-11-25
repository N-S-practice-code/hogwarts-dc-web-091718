
import React, { Component } from 'react';
import HogCard from './HogCard'

class HogContainer extends React.Component {
  constructor(props) {
    super(props)
    debugger
    this.state = {
      displayHogs: this.props.hogdata
    };
  }

  generateHogCards = () => {
    debugger
    return "test"
    return this.props.allHogs.map(function (hog) {
      return (<HogCard hogData={hog} />)
    })
  }

  render() {
    return <div className="ui grid container">{this.generateHogCards()}</div>
  }
}

export default HogContainer
