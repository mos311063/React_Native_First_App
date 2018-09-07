import React from 'react'
import { StyleSheet, 
         Text, 
         View,
         TextInput,
         ScrollView,
         TouchableOpacity,
         StatusBar,
         Keyboard,
         Button,
         TouchableWithoutFeedback,
         AlertIOS
} from 'react-native'

import TimeBox from '../comp/timebox'

export default class Main extends React.Component {

  constructor(props){
      super(props)
        this.state ={
          total:0,
          totalW:0,
          mon:0,
          tue:0,
          wed:0,
          thu:0,
          fri:0,
          sat:0,
          sun:0,
          breakH:0,
          breakM:0
      }
      this.totals = this.totals.bind(this)
      this.totalW = this.totalW.bind(this)
  }

  totalW()
  {
    var  totalW = (this.state.mon + this.state.tue +this.state.wed
    +this.state.thu+this.state.fri+this.state.sat+this.state.sun)
    var  total = totalW - (this.state.breakH/1 + (this.state.breakM)/60)
    this.setState({totalW:totalW})
    this.setState({total:total})
  }
  totals(){
    AlertIOS.prompt(
  'Enter an hour pay',
  null,
  text => {if(isNaN(text) == false){ AlertIOS.alert("Total Hour Working : "+ this.state.total + "\nPay per hour : $"+text+ "\n\nTotal Pay : $" 
    + this.state.total*text )}else{ AlertIOS.alert("Please enter number")}}
);
  }
  setMon(value){
        this.setState({mon:value},() =>this.totalW())
  }
  setTue(value){
        this.setState({tue:value},() =>this.totalW())
  }
  setWed(value){
        this.setState({wed:value},() =>this.totalW())
  }
  setThu(value){
        this.setState({thu:value},() =>this.totalW())
  }
  setFri(value){
        this.setState({fri:value},() =>this.totalW())
  }
  setSat(value){
        this.setState({sat:value},() =>this.totalW())
  }
  setSun(value){
        this.setState({sun:value},() =>this.totalW())
  }


  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={[styles.container]}>
    <Text style={{color:'red',fontSize:20,textAlign:'center',fontWeight:'bold'}}>
      &#9829; My Work Hour Calculator  &#9829; </Text>
    <TimeBox day='Mon' setTime={this.setMon.bind(this)}/>
    <TimeBox day='Tue' setTime={this.setTue.bind(this)}/>
    <TimeBox day='Wed' setTime={this.setWed.bind(this)}/>
    <TimeBox day='Thu' setTime={this.setThu.bind(this)}/>
    <TimeBox day='Fri' setTime={this.setFri.bind(this)}/>
    <TimeBox day='Sat' setTime={this.setSat.bind(this)}/>
    <TimeBox day='Sun' setTime={this.setSun.bind(this)}/>
    <View style={{ flexDirection : 'row',flex:0.4}}>
    <TextInput  keyboardAppearance='dark'
          style={{ flex : 0.6,color:'black',backgroundColor:'#DDD',color:'blue',
          borderWidth : StyleSheet.hairlineWidth,     fontWeight:'bold',
          textAlign : "center"}}
           value = {this.state.value}
           onChangeText={(value) => this.setState({breakH: value},() =>this.totalW())}
           placeholder="Enter total Break Time"
           keyboardType ='number-pad'
           maxLength={2}
        />
        <Text style={{ flex : 0.1,color:'white',
          textAlign : "center",fontSize:15,justifyContent : 'center',
        alignSelf:'center',}}>Hrs</Text>
    <TextInput  keyboardAppearance='dark'
          style={{ flex : 0.6,color:'black',backgroundColor:'#DDD',
          borderWidth : StyleSheet.hairlineWidth,     fontWeight:'bold',color:'blue',
          textAlign : "center"}}
           value = {this.state.value}
           onChangeText={(value) => this.setState({breakM: value},() =>this.totalW())}
           placeholder="Enter total Break Time"
           keyboardType ='number-pad'
           maxLength={3}
        />
        <Text style={{ flex : 0.1,color:'white',
          textAlign : "center",fontSize:15,justifyContent : 'center',
        alignSelf:'center',}}>Min</Text>
        </View>
    <Text style={{color:'yellow'}}>Monday total working : {this.state.mon.toFixed(2)} hrs</Text>
    <Text style={{color:'pink'}}>Tueday total working : {this.state.tue.toFixed(2)} hrs</Text>
    <Text style={{color:'green'}}>Wednesday total working : {this.state.wed.toFixed(2)} hrs</Text>
    <Text style={{color:'orange'}}>Thursday total working : {this.state.thu.toFixed(2)}hrs</Text>
    <Text style={{color:'blue'}}>Friday total working : {this.state.fri.toFixed(2)} hrs</Text>
    <Text style={{color:'purple'}}>Saturday total working : {this.state.sat.toFixed(2)} hrs</Text>
    <Text style={{color:'red'}}>Sunday total working : {this.state.sun.toFixed(2)} hrs</Text>
    <Text  style={{color:'gray',fontSize:12,padding:5,alignSelf:'center'}}>Total Work hour: {this.state.totalW.toFixed(2)} hrs - 
    Break Time of {this.state.breakH} hrs and {this.state.breakM} min</Text>
    <Text  style={{color:'white',fontSize:20,padding:5,alignSelf:'center',fontWeight:'bold'}}>Total Working Hour : {this.state.total.toFixed(2)} hrs</Text>
    <TouchableOpacity 
                style ={{
                    height: 40,
                    width:200,
                    borderRadius:10,
                    backgroundColor : "white",
                    alignSelf:'center',
                    marginBottom: 10
                }}>
    <Button 
    onPress={() =>  this.totals()}
    title="Calculate Pay"/>
    </TouchableOpacity >
    </View>
    </TouchableWithoutFeedback>
    )
  }
}

  const styles = StyleSheet.create({

      container:{
        backgroundColor : 'black',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        alignSelf:'stretch',
        marginTop : 25,
        flex:1
      },
  })
