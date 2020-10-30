import React, { Component } from 'react'

class RandomButton extends Component {
    constructor(props) {
        super(props); 
        this.state = { num: 1 }; 
        this.genRandom = this.genRandom.bind(this); 
    }
    genRandom() {
        // pick a number 1-10
        let rand = Math.floor(Math.random() * 10) + 1; 
        // update state with random
        this.setState({ num: rand }); 
    }
    render() {
        return (
            <div className="RandomButton">
                <h1>Number is {this.state.num}</h1>
                {this.state.num === 7 
                    ? <h2>YOU WIN!</h2>
                    : <button onClick={this.genRandom}>Random Number</button>}
            </div>
        )
    }
}

export default RandomButton