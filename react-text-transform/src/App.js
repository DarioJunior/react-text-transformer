import React, { Component } from 'react';
import Input from './components/input/Input';
import * as Tratament from './components/input/TratamentsFunctions';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      inputText: '',
      invertedText: [],
      numericText: [],
      csvText: [],
      slugText: [],
      vowelsText: [],
      consonantText: [],
      varText: [],
    }
  }

  handleChangeInputText = (newInput) => {
    this.setState({
      inputText: newInput,
      invertedText: {
        id: 1,
        newText: Tratament.invertText(newInput),
      },
      numericText: {
        id: 2,
        newText: Tratament.numericText(newInput),
      },
      csvText: {
        id: 3,
        newText: Tratament.csvText(newInput),
      },
      slugText: {
        id: 4,
        newText: Tratament.slugText(newInput),
      },
      vowelsText: {
        id: 5,
        newText: Tratament.vowelsText(newInput),
      },
      consonantText: {
        id: 6,
        newText: Tratament.consonantsText(newInput),
      },
      varText: {
        id: 7,
        newText: Tratament.varText(newInput),
      }
    
    })
  }
 
  render() {
    const { invertedText, numericText, csvText, slugText, vowelsText, consonantText, varText } = this.state;
    
      return (
        
        <div>
          <Input onChangeInputText={this.handleChangeInputText}/>
        </div>
      );
    }
  }