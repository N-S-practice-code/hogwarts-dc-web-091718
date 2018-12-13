import React from 'react'

class HogCard extends React.Component {

  state = {
    details: false
  }

  toggleDetails = () => {
    this.setState({details: !this.state.details})
  }

  getImage = hogName => {
      let formattedName = hogName
        .split(" ")
        .join("_")
        .toLowerCase();
      let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
      return pigPics;
    };



  render() {
    let hog = this.props.hogData
    hog.weight=hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    hog.medal=hog['highest medal achieved']
    return (
      <div className="pigTile">
        <div className="image">
          <img src={this.getImage(hog.name)} alt=""/>
        </div>
        <div className="content">
          <a className="header">
            {hog.name}
            <div onClick={this.toggleDetails}>Show/Hide Details</div>
          </a>
          {this.state.details ? <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
          </div> : null}
        </div>
      </div>
    )
  }
}


export default HogCard
