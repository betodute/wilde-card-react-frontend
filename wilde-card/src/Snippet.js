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
  //  this.wildeLine1();
  //  this.wildeLine2();
  //  this.wildeLine3();
  }

  wildeAuthor = () => {
    fetch("https://randomuser.me/api/?nat=us,dk,fr,gb&results=10")
    .then(response => response.json())
    .then(this.parseAuthor)
  }

  parseAuthor = (data) => {

    // The name logical function machine should be much more interesting than this.
    // It should be truely iterative and random.

    let randomName = data["results"][5]
    let randomName2 = data["results"][3]
    let firstName = randomName["name"]["first"]
    let lastName = randomName2["name"]["last"]
    this.setState({author: firstName + " " + lastName})
  }

  wildeTitle = () => {
    fetch(`http://api.urbandictionary.com/v0/define?term=${this.state.wordInput}`)
    .then(response => response.json())
    .then(this.parseTitle)
  }

  parseTitle = (data) => {
    let dl = data["list"].length
    let randomTitle = data["list"][this.getRandomInt(dl)]["example"]
    let noPunct = randomTitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let finalString = noPunct.replace(/\s{2,}/g," ");
    let final2 = finalString.replace(/[0-9]/g, '')
    let final3 = final2.replace(/[[\]]/g,'')
    let final4 = final3.replace(/"/g,"")
    let jumble = final4.split(" ")
    let x = jumble.length - this.getRandomInt(jumble.length)
    let y = this.getRandomInt(x)
    if ((x - y < 4) || (x - y > 15)) {
      y = 0
      x = 8
    }
    console.log(x, y)
    let wildeTitle = jumble.slice(y , x).join(" ")
    this.setState({ title: wildeTitle })
  }


  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  render() { 
    return (
      <div className='snippet'> 
        <p className="snippetTitle"> { this.state.title } </p>
        <p className="snippetAuthor"> by { this.state.author } </p>
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
 