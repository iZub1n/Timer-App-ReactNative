import Constants from 'expo-constants';
import React from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Switch, Text, TextInput, View, ScrollView } from 'react-native';
import {vibrate} from './utils'
import styles from './stylesheet.js'
import Timer, {TimeLabel} from './timerMain.js'
import TimeInput from './timeInputField.js'




export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      timerState: true, 
      workTime: 1800, 
      breakTime: 300,
      time: 1800,
      paused: true,
      wmode: true,
    }
  }

  getDuration = (wmode) =>{
    if (wmode){
      return this.state.workTime;
    }
    return this.state.breakTime;
  }

  resetTime = (changeMode) =>{
    let t, ts;
    if (changeMode){
      t = this.getDuration(!this.state.timerState);
      ts = !this.state.timerState;
    }
    else {
      t = this.getDuration(this.state.timerState);
      ts = this.state.timerState;
    }
    this.setState({
      timerState: ts,
      time: t,
    })   

  }  
  decFunc = () =>  {
    if (this.state.time<=0){
      vibrate()
      this.toggleMode();
      return
    }
    this.setState(prevState => ({time: prevState.time -1,}))
  }

  startPause = () => {
    if (this.state.paused){
      this.interval = setInterval(this.decFunc,1000)
    }
    else{clearInterval(this.interval)}

    this.setState({paused: !this.state.paused,}) 
  }

  resetFunc = () => {
    this.resetTime(false)
  }

  toggleMode = () => {
   this.resetTime(true)
   this.setState({wmode: !this.state.wmode,}) 
  }

  updateDuration = (s, wmode) => {
    let m = parseInt(s)*60
    if (!this.state.paused){ this.startPause();}
   
    let wt = this.state.workTime;
    let bt =  this.state.breakTime;
    let t = this.state.time;
    if (wmode){
     wt = m
     t = m
    }
    else {
      bt = m
      t = m
    }

    this.setState({
      workTime: wt,
      breakTime: bt,
      time: t,
    })
  }


  render() {
    var tS="";
    if (this.state.paused){
      tS="Start"
    }
    else{tS="Pause"}

    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
        <ScrollView style={styles.container}>
        
        <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textHeadingBig}>Pomodoro Timer</Text> 
        </View>

        <Switch value={this.state.wmode} onValueChange={this.toggleMode} />

         <Timer res={this.state}/>

        <View style={styles.containerInline}>
          <View style={[styles.circularButton]}>
            <Button color="white" title={tS} onPress={this.startPause} />
          </View>
          <View style={[styles.circularButton]}>
            <Button color="white" title="Reset" onPress={this.resetFunc}/>
          </View>
        </View>

        <View style={styles.containerInline}>
          <View style={styles.containerVertical}>
            <Text style={styles.textHeadingSmall}>Work Time:</Text>
            <Text style={styles.textHeadingSmall}>Break Time:</Text>
            </View>
              <View style={styles.containerVertical}>

                <View style={[styles.containerInline, ]}>         
                  <TimeInput onUpdate={text => this.updateDuration(text, true)}/>
                  <Text>Min</Text>
                </View>

                <View style={[styles.containerInline,]}>
                  <TimeInput onUpdate={text => this.updateDuration(text, false)}/>
                  <Text>Min</Text>

                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}


