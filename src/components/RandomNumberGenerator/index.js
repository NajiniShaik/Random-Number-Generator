import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomValue})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="detailed-card">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
