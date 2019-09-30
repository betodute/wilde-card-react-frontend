import React, { Component } from 'react';
import Snippet from './Snippet';
import Villanelle from './Villanelle';
import './Card.css'

export default class Card extends Component {
  render() { 
    return (
      <div className="wildeCard">
        <Snippet 
        author={ this.props.author }
        title={ this.props.title }
        line1={ this.props.line1 }
        line2={ this.props.line2 }
        line3={ this.props.line3 } 
        />
      </div>
    );
  }
}
 