import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import Botao from './src/components/Button'
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  value: [0, 0],
  current: 0
}

export default class App extends Component {
  // utilizando funcionalidade para clonar os objetos do initial state para o state
  state = {...initialState}

  addDigit = n => {
    if (n === '.' && this.state.displayValue.includes('.')){
      return 
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.value]
      values[this.state.current] = newValue
      this.setState({ values })
    }
  } 

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperetion = operation => {

  }
  render (){
    return (
      // <SafeAreaView>
        <View style={styles.container}>
          <Display value={this.state.displayValue} />
          <View style={styles.buttons}>
            <Botao label="AC" triple onClick={this.clearMemory} />
            <Botao label="/" operation onClick={this.setOperetion}/>
            <Botao label="7" onClick={this.addDigit} />
            <Botao label="8" onClick={this.addDigit}/>
            <Botao label="9" onClick={this.addDigit} />
            <Botao label="*" operation onClick={this.setOperetion} />
            <Botao label="4" onClick={this.addDigit} />
            <Botao label="5" onClick={this.addDigit} />
            <Botao label="6" onClick={this.addDigit} />
            <Botao label="-" operation onClick={this.setOperetion}/>
            <Botao label="1" onClick={this.addDigit} />
            <Botao label="2" onClick={this.addDigit} />
            <Botao label="3" onClick={this.addDigit} />
            <Botao label="+" operation onClick={this.setOperetion}/>
            <Botao label="0" double onClick={this.addDigit} />
            <Botao label="." onClick={this.addDigit}/>
            <Botao label="=" operation onClick={this.setOperetion} />
          </View>
        </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});