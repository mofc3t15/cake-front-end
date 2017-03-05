import React, { Component, PropTypes } from 'react';


import { View, StyleSheet,Text } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { Icon } from 'react-native-material-design';
var PushNotification = require('react-native-push-notification');

import TabHome from './TabHome';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  page: {
    flex: 1
  },
});



export default class Home extends Component {


  state = {
    index: 0,
    routes: [
      { key: '1', icon: 'home' },
      { key: '2', icon: 'web' },
      { key: '3', icon: 'chat' },
      { key: '4', icon: 'menu' }
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
    
  };

  _renderIcon = ({ route }: any) => {
    return (
      <Icon name={route.icon} size={24} color="#d32b5f" />
    );
};

  _renderHeader = (props) => {
    return <TabBar pressColor='#454545' renderIcon={this._renderIcon} {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return (<TabHome style={[ styles.page, { backgroundColor: '#dddddd' } ]} />);
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#dddddd' } ]} />
    case '3':
      return <View style={[ styles.page, { backgroundColor: '#dddddd' } ]} />
    case '4':
      return <View style={[ styles.page, { backgroundColor: '#dddddd' } ]} />
    default:
      return null;
    }
  };

  render() {

    return (
      <TabViewAnimated
      
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}
