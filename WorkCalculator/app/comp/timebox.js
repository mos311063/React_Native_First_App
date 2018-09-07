import React from 'react'
import {
		 StyleSheet, 
         Text, 
         View,
         TextInput,
         ScrollView,
         TouchableOpacity,
         StatusBar,
         TouchableHighlight
} from 'react-native'


export default class TimeBox extends React.Component {

  constructor(props){
      super(props)
      this.state ={
        backgroundColor : 'white',
        startH : '',
        endH : '',
        startM : '',
        endM : '',
        minute : this.props.time,
        day : this.props.day
      }
      this.checkHour = this.checkHour.bind(this)
      this.checkMin = this.checkMin.bind(this)
      this.TimeCalculate = this.TimeCalculate.bind(this)
  }

  	TimeCalculate()
  	{
  		var sh = this.state.startH/1
  		var eh = this.state.endH/1
  		var sm = this.state.startM/1
  		var em = this.state.endM/1
  		var minute = ((eh-sh)+(em-sm)/60)
  		this.setState({minute:minute},() =>  minute = this.state.minute >= 0 ? this.setState({backgroundColor : 'white'}) : this.setState({backgroundColor : 'red'}))
  		this.props.setTime(minute)

  	}
  
    checkHour(){
  	 this.TimeCalculate()
  }

   checkMin(){
  	 this.TimeCalculate()
  }


  render() {
		return(
		<View style={[styles.container]}> 
		<Text style= {[styles.label,{fontFamily:'Courier'}]}>{this.state.day}</Text>
		<TextInput clearButtonMode='unless-editing' keyboardAppearance='dark'
          style={[styles.box,{ backgroundColor : this.state.backgroundColor}]}
           value = {this.state.startH}
             onFocus={() => {this.setState({backgroundColor : 'yellow'})}}
           onChangeText={(value) => this.setState({startH: value}) } 
           onEndEditing ={() => this.checkHour()}
           placeholder="hh" 
           keyboardType ='number-pad'
           maxLength={2} 
        />
        <Text style={[styles.label]} >:</Text>
		<TextInput clearButtonMode='unless-editing' keyboardAppearance='dark'
          style={[styles.box,{ backgroundColor : this.state.backgroundColor}]}
           value = {this.state.startM}
            onFocus={() => {this.setState({backgroundColor : 'yellow'})}}
           onChangeText={(value) => value = value > 59 ? this.setState({startM: '59'}) : this.setState({startM: value})}
           onEndEditing ={() => this.checkMin()}
           placeholder="mm"
           keyboardType ='number-pad'
           maxLength={2}
        />
        <Text style={[styles.label]} >TO</Text>
        <TextInput clearButtonMode='unless-editing'  keyboardAppearance='dark'
          style={[styles.box,{ backgroundColor : this.state.backgroundColor}]}
           value = {this.state.endH}
            onFocus={() => {this.setState({backgroundColor : 'yellow'})}}
           onChangeText={(value) => this.setState({endH: value}) }
           onEndEditing ={() => this.checkHour()}
           placeholder="hh"
           keyboardType ='number-pad'
           maxLength={2}
        />
        <Text style={[styles.label]} >:</Text>
		<TextInput clearButtonMode='unless-editing' keyboardAppearance='dark'
          style={[styles.box,{ backgroundColor : this.state.backgroundColor}]}
           value = {this.state.endM}
             onFocus={() => {this.setState({backgroundColor : 'yellow'})}}
           onChangeText={(value) => value = value > 59 ? this.setState({endM: '59'}) : this.setState({endM: value}) }
           onEndEditing ={() => this.checkMin()}
           placeholder="mm"
           keyboardType ='number-pad'
           maxLength={2}
        />
        </View>
)
}
}

const styles = StyleSheet.create(
{
 
      container:{
        backgroundColor : '#DDD',
        flexDirection : 'row',
        justifyContent : 'center',
        padding : 10,

      },

 	box : {
          flex : 3,
          borderWidth : StyleSheet.hairlineWidth,
          textAlign : "center",
          margin:1,
          height:23,
          width:'100%',
          color:'blue',
          fontWeight:'bold'
      },

       label : {
        fontSize: 18,
        margin:2,
        backgroundColor : '#DDD',
        fontFamily:'Courier-Bold'
      }
})
