import React, { Component, PropTypes } from 'react';
import { View, Text, Alert, TouchableHighlight } from 'react-native';
import AppIntro from 'react-native-app-intro';
import { Icon } from 'react-native-material-design';
export default class AppIntroPage extends Component {



  onSkipBtnHandle = (index) => {
    

  }
  doneBtnHandle = () => {
 

  }
  nextBtnHandle = (index) => {
    
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  goToHome = () => {



    this.props.navigata.push(CakeScenesStore.nRoutes.Home);
  }


  render() {



    const pageArray = [{
      title: 'Welcomes',
      description: 'We\'re giving you a piece of cake!. Just for us. we couldn\'t care about others. so get started.',
      img: require('./images/balloons.png'),
      imgStyle: {
        height: 200,
        width: 200,
      },
      backgroundColor: '#d32b5f',
      fontColor: '#fff',
      level: 8,
    }, {
      title: 'Features',
      description: 'There\'s no describing of the features. The app is designed just for us and is highly customised to suit our needs, Also report us if it does\'nt.',
      img: require('./images/giftbox.png'),
      imgStyle: {
        height: 200,
        width: 200,
      },
      backgroundColor: '#f1543f',
      fontColor: '#fff',
      level: 8,
    },{
      title: 'Privacy',
      description: 'We care for user\'s privacy and security. The information stored in the app is secure and will not be shared with others unless specified.',
      img: require('./images/keyhole.png'),
      imgStyle: {
        height: 200,
        width: 200,
      },
      backgroundColor: '#3b4356',
      fontColor: '#fff',
      level: 8,
    }];
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.goToHome}
        onSkipBtnClick={this.goToHome}
        onSlideChange={this.onSlideChangeHandle}
        pageArray={pageArray}
      />
    );
  }
}


