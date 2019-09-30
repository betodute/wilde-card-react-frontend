import React, { Component } from 'react';
import './Snippet.css'

export default class Snippet extends Component {
  state = { 
  }

  render() { 
    return (
      <div className='snippet'> 
        <p className="snippetTitle"> { this.props.title } </p>
        <p className="snippetTitle"> by { this.props.author } </p>
        <p> { this.props.line1 } </p>
        <p> { this.props.line2 } </p>
        <p> { this.props.line3 } </p>
      </div>
    )
  }
}
 