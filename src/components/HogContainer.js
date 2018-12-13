
import React from 'react';
import HogCard from './HogCard'

class HogContainer extends React.Component {

  generateHogCards = () => {
    if (!this.props.hogs){return (<div></div>)}
    return this.props.hogs.map(function (hog) {
      return (<HogCard key={hog.name} hogData={hog} />)
    })
  }

  render() {
    return <div className="ui grid container">{this.generateHogCards()}</div>
  }
}

export default HogContainer
