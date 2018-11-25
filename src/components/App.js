import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogContainer from './HogContainer'
import hogs from '../porkers_data';
class App extends React.Component {

  constructor() {
    super()

    this.state = {
      allHogs: hogs,
      filter: "all",
      sortBy: "none",
      filteredHogs: [],
      orderedHogs: []
    }
  }
  setFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }
  setSort = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }



  render() {
    return (
      <div className="App">
          < Nav />
          < HogContainer testProp="1" />
      </div>
    )
  }
}

export default App;
