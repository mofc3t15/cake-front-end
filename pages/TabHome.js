/*
*
* @FivBlue 

* Desc:
* Main entry point of the app.

* App Name: Cake.
* Delegated to: Vidyanikethan Engg., College.
* Author: Liyakhath aSif.
*
*/

// imports section

import React, { Component, PropTypes } from 'react';
import { View, Text, Image,  Alert, TouchableHighlight, StyleSheet, ToastAndroid} from 'react-native';
import AppIntro from 'react-native-app-intro';
import { Icon, Card, Button} from 'react-native-material-design';
var RNFS = require('react-native-fs');

var index = {

  abc:'hello',
  def:'world'

};


var wow = [];

export default class TabHome extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      Texts:[],
      
    };
  }




  

  _onPressOut(){

    let temp = index
    wow.push(temp);
    this.setState({
      Texts: wow
    })
  }

  render() {


    let Arr =  this.state.Texts.map((a,i) => {

      return <View key={i} ><Text>{ a.def }</Text></View>
    })



  /*  RNFS.downloadFile(

    {

      fromUrl: 'http://svecserv.16mb.com/uploads/week2b.c',
      toFile:'/storage/emulated/0/week2b.c'
    }

    );

    ToastAndroid.show('week2b.c downloaded to intenal storage',ToastAndroid.LONG);
*/

    return(

            <View style={{flex:1}}>
                <Card elevation={4} style={{borderColor:'red'}}>
                    <Card.Media 
                        image={<Image source={require('./welcome.jpg')} />}
                        overlay
                    >
                        <Text >Welcome</Text>
                        <Text  style={ { color: 'white' } }>React Native Material Design</Text>
                    </Card.Media>
                    <Card.Body>
                        <Text >To get started, vist the documentation over at Github! This page is an example of the Card component.</Text>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button text="GO TO Cake Website" onPress={() => IntentAndroid.openURL('http://getcake.ml')} />
                    </Card.Actions>
                </Card>

            </View>

    );

  }

}

/*

      <View style={[ styles.page, { backgroundColor: '#dddddd' } ]} >
        { Arr }

        <TouchableHighlight onPress={() => {
          this._onPressOut()
        }}>
        <Text>Push</Text>
        </TouchableHighlight>
      </View>  
*/


const styles = StyleSheet.create({

});
