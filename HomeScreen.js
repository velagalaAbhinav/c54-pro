import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={[styles.button,{backgroundColor:"orange"}]} 
            onPress={()=>this.goToBuzzerScreen("red")}>
            <Text style={styles.buttonText}>Sound 1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"black"}]} 
            onPress={()=>this.goToBuzzerScreen("green")}>
            <Text style={styles.buttonText}>Sound 2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("blue")}>
            <Text style={styles.buttonText}>Sound 3</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"yellow"}]} 
            onPress={()=>this.goToBuzzerScreen("yellow")}>
            <Text style={styles.buttonText}>Sound 4</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})