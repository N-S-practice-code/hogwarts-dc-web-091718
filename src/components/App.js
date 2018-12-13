import React from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import HogFilter from './HogFilter'
import HogSort from './HogSort'
import hogs from '../porkers_data';



class App extends React.Component {


  state = {
    allHogs: hogs,
    filter: "all",
    sortBy: "none"
  }


  setFilter = (event) => {

    this.setState({
      filter: event.target.value
    })
    // debugger
    console.log(this.state)
  }
  setSort = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }



  genHogSubset = () => {
    let displayHogs=this.state.allHogs
    if (this.state.filter==="greased"){
      displayHogs=displayHogs.filter(function (h) {
        return h.greased;
      });
    }
    if (this.state.filter==="unGreased"){
      displayHogs=displayHogs.filter(function (h) {
        return !h.greased;
      });
    }
    if (this.state.sortBy==="By Name"){
      displayHogs=displayHogs.sort(function (h1,h2) {
        return h1.name > h2.name;
      });)
    }
    if (this.state.sortBy==="By Weight"){
      displayHogs=displayHogs.sort(function (h1,h2) {
        h1.weight=h1['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        h2.weight=h2['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        return h1.we > h2.name;
      });)
    }
    return displayHogs
  }



  render() {
    return (
      <div className="App">
          < Nav />
          <HogFilter setFilter={this.setFilter}/>
          <HogSort setSort={this.setSort} />
          < HogContainer hogs={this.genHogSubset()} />
      </div>
    )
  }
}

export default App;
