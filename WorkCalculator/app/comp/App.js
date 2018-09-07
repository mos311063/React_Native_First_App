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
         TouchableWithoutFeedback
} from 'react-native'

import Main from '../comp/Main'

 constructor(props){
      super(props)
        this.state ={
}
  }

export default class App extends React.Component {
  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <ScrollView style={[styles.container]}>
    <Main/>
    <Main/>
    </ScrollView>
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
