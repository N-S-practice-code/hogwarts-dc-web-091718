import React from 'react'

import mudblood from '../hog-imgs/mudblood.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
// import Porkchop from '../hog-imgs/augustus_gloop.jpg'
// import Porkchop from '../hog-imgs/bay_of_pigs.jpg'
// import Porkchop from '../hog-imgs/cherub.jpg'
// import Porkchop from '../hog-imgs/galaxy_note.jpg'
// import Porkchop from '../hog-imgs/leggo_my_eggo.jpg'


function format1(name){
  return ""
}

// {
//   name: 'Porkchop',
//   specialty: 'Making friends',
//   greased: true,
//   'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 1.6,
//   'highest medal achieved': 'silver'
// }


class HogCard extends React.Component {

  render() {
    let hog = this.props.hogData
    hog.weight=hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    hog.medal=hog['highest medal achieved']
    return (
      <div className="ui eight wide column pigTile">
        <div className="image">
          <img src={porkchop}/>
        </div>
        <div className="content">
          <a className="header">
            {hog.name}
          </a>
          <div className="description">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default HogCard
