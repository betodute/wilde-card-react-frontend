import React, { Component } from 'react';
import Card from './Card.js';
import './App.css';

export default class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <h1 class="appTitle"> Wilde Card </h1>
        <h3 class="appSubtitle"> a creativity application for writers </h3>
          <form>
            <label>
              Word:
              <input type="text" name="word" />
            </label>
            <input type="submit" value="Submit" />
          </form>

          <Card />
      </React.Fragment>
    );
  }
}
 
