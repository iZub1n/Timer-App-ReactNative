import React from 'react';
import {StyleSheet, Text, TextInput,} from 'react-native';
import styles from './stylesheet.js'

const TimeInput =  props => ({
  render() {
    return (
      <TextInput 
              keyboardType= "number-pad"
              style={styles.timeInput}
              onChangeText={props.onUpdate}
      />
    )}
})

export default TimeInput