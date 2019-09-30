import React, { Component } from 'react';
import './Snippet.css'

export default class Snippet extends Component {
  state = {
    title: this.props.title,
    author: this.props.author,
    line1: this.props.line1,
    line2: this.props.line2,
    line3: this.props.line3,
    wordInput: this.props.wordInput 
  }

  wildeHandler = () => {
    console.log("¡ We're Gettin Creigh Creigh !")
   this.wildeAuthor();
   this.wildeTitle();
   this.wildeLine1();
   this.wildeLine2();
   this.wildeLine3();
  }

  wildeAuthor = () => {
    fetch("https://randomuser.me/api/?nat=us,dk,fr,gb&results=10")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  wildeTitle = () => {
    fetch(`http://api.urbandictionary.com/v0/define?term=${this.state.wordInput}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() { 
    return (
      <div className='snippet'> 
        <p className="snippetTitle"> { this.state.title } </p>
        <p className="snippetTitle"> by { this.state.author } </p>
        <br />
        <p> { this.state.line1 } </p>
        <p> { this.state.line2 } </p>
        <p> { this.state.line3 } </p>
        <br /> <br />
        <button className="wildeButton" onClick={ this.wildeHandler }> W I L D E </button>
      </div>
    )
  }
}
 