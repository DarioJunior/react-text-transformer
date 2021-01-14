import React, { Component } from 'react';
import css from './input.module.css';

export default class Input extends Component {
 
  handleInputChange = (event) => {
   const newInput = event.target.value;
   this.props.onChangeInputText(newInput)
  }

  render() {
    return(
      <div>
        <h1 className={css.h1Title}>React Text Transform - IGTI</h1>
        <p className={css.paragraph}>Digite um texto qualquer:</p>
        <input 
        className={css.inputText} 
        type="text" 
        name="text"

        onChange={this.handleInputChange}
        />
      </div>
    )
  }
}