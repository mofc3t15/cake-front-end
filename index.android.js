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

import React, { Component } from 'react';
import {
  View,
  Navigator,
  AppRegistry,
  Text
} from 'react-native';

import SplashScreenManager from '@remobile/react-native-splashscreen';

import AppIntroPage from './pages/AppIntroPage';
import Home from './pages/Home';
import TabHome from './pages/TabHome';

class Cake extends Component {

  componentDidMount() {

    SplashScreenManager.hide();

  }


  renderScene(route,navigator) {

    switch(route.id) {

      case 0:

        return(

                <AppIntroPage

                  navigata={navigator}

                 />
        );

        break;

      case 1:

        return(<Home />);

    }


              
  }


  render() {



    return(

        <TabHome />
    );

  }

}

module.exports =  CakeScenesStore = {

nRoutes: {

  AppIntroPage: {

    id: 0,
    name: 'AppIntroPage'

  },

  Home: {

    id: 1,
    name: 'HomePage'

  }  

}

};

AppRegistry.registerComponent('Cake',() => Cake);