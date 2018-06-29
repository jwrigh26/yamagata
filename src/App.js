/**
 * Yamagata React Native App
 * https://github.com/jwrigh26/yamagata
 * https://github.com/facebook/react-native
 *
 * iOS:
 * Press Cmd+R to reload
 * Cmd+D or shake for dev menu
 *
 * Android:
 * Double tap R on your keyboard to reload
 * Shake or press menu button for dev menu
 */

import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 30,
    textAlign: 'center'
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HELLO WORLD</Text>
      </View>
    );
  }
}
