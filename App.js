import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import Botao from './src/components/Button'

export default function App() {
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Botao label="AC" />
          <Botao label="/" />
          <Botao label="7" />
          <Botao label="8" />
          <Botao label="9" />
          <Botao label="*" />
          <Botao label="4" />
          <Botao label="5" />
          <Botao label="6" />
          <Botao label="-" />
          <Botao label="1" />
          <Botao label="2" />
          <Botao label="3" />
          <Botao label="+" />
          <Botao label="0" />
          <Botao label="." />
          <Botao label="=" />
        </View>
      </View>
    </SafeAreaView>
  );
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