import React, { Component } from 'react';

export default class Snippet extends Component {
  state = { 
    cards : []
  }

  componentDidMount() {
    fetch('localhost:3000/input', {
      method: "INPUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      input: 'queer'
      })
    })
    .then(response => response.json())
    .then(data => this.setState({cards : data}))
  }

  render() { 
    return ( 
      <React.Fragment>
        {this.state.cards}
      </React.Fragment>
    )
  }
}
 