import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    displayIndex: 0,
    money: '100'
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushis => this.setState({sushis: sushis}))
  }

  getNextFour = () => {
    let newIndex = this.state.displayIndex + 4
    if(newIndex >= this.state.sushis.length){ newIndex -= this.state.sushis.length}
    this.setState({
        displayIndex: newIndex
    })
  }

  removeSushi = (sushi) => {
    if(sushi.price > this.state.money){
      alert("You can not afford this sushi.")
      return false
    }
    this.setState(prevState => {
      return {
        sushis: prevState.sushis.filter(singleSushi => singleSushi !== sushi),
        eaten: [...prevState.eaten, sushi],
        money: prevState.money - sushi.price
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} displayIndex={this.state.displayIndex} getNextFour={this.getNextFour} removeSushi={sushi => this.removeSushi(sushi)} eaten={this.state.eaten}/>
        <Table eaten={this.state.eaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;