import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

export default class App extends Component {
  state = { 
    wordInput: "",
    snippets: []
   }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ wordInput: document.querySelector("#wordInput").value })
    fetch('http://localhost:3000/cards/input', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      input: document.querySelector("#wordInput").value
      })
    })
    .then(response => response.json())
    .then(data => this.setState({snippets: data}))
  }

  parseSnippets = () => {
    return this.state.snippets.map(snippet => {
      return (
        <Card 
          author={ snippet["author"] }
          title={ snippet["title"] }
          line1={ snippet["context"][0] }
          line2={ snippet["context"][1] }
          line3={ snippet["context"][2] }
          wordInput={ this.state.wordInput }
        />
      )
    })
  }

  titleChange = () => {
    let title = document.querySelector(".appTitle")
    let value = document.querySelector("#wordInput").value
    if (value.length) {
      title.innerText = value
    } else {
      title.innerText = "wilde card"
    }
  }

  render() { 
    return (
      <React.Fragment>
        <h1 className="appTitle"> wilde card </h1>
        <h3 className="appSubtitle"> a creativity application for writers </h3>
          <form className="appForm" onSubmit={ this.handleSubmit }>
            <label>
              <input id="wordInput" type="text" name="word" placeholder="word" onChange={ this.titleChange } />
            </label>
              <input type="submit" value="submit" />
          </form>

          <div className="mainContainer">
            { this.parseSnippets() }
          </div>

      </React.Fragment>
    );
  }

  // Root Class Component Ends Here

}
 
