import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import styles from './stylesheet.js'

class Timer extends React.Component{  
  timeConverter(seconds){
    var TimeFormat = new Date(0);
    TimeFormat.setSeconds(parseInt(seconds));
    var TimeToStr = TimeFormat.toISOString().substr(11, 8);
    return TimeToStr;
  }

  render() {
    var TimeToStr = this.timeConverter(this.props.res.time);

    if (this.props.res.timerState){
    return (
    <View style={styles.container}>
      <Text style={styles.textHeadingBig}>
        Work
      </Text>

      <Text style={styles.textHeadingBig}>
          {TimeToStr}
      </Text>
    </View>
    )
    }
    return (
       <View style={styles.container}>
      <Text style={styles.textHeadingBig}>
        Break
      </Text>
      <Text style={styles.textHeadingBig}>
          {TimeToStr}
      </Text>
    </View>
    )

  }
}
export default Timer