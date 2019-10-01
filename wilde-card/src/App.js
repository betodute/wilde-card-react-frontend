import React, { Component } from 'react';
import './App.css';

//Components

import User from './User.js'
import Card from './Card.js';

// * * * *  W I L D E    C A R D * * * * 

export default class App extends Component {
  state = { 
    wordInput: "",
    snippets: [],
    userId: 0,
    userName: ""
   }

  handleWordSubmit = (event) => {
    event.preventDefault()
    this.pageLoadAnimation()
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
    // .then(console.log)
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

  pageLoadAnimation = () => {
    console.log("Put Loading Page Animation Here")
  }

  titleChange = () => {
    let t = document.querySelector(".appTitle")
    let value = document.querySelector("#wordInput").value
    value.length ? t.innerText = value : t.innerText = "wilde card"
  }

  render() { 
    return (
      <React.Fragment>
        <h1 className="appTitle"> wilde card </h1>
        <h3 className="appSubtitle"> a creativity application for writers </h3>
          <form className="appForm userForm" onSubmit={ this.handleUserSubmit }>
            <input id="userInput" type="text" name="name" placeholder="name" />
            <input type="submit" value="submit" />
          </form>
        < User />
        <br/>
          <form className="appForm" onSubmit={ this.handleWordSubmit }>
            <input id="wordInput" type="text" name="word" placeholder="word" 
            onChange={ this.titleChange } />
            <input type="submit" value="submit" />
          </form>

          <div className="mainContainer">
            { this.parseSnippets() }
          </div>

      </React.Fragment>
    );
  }
}