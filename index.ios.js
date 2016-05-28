/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Index = require('./pages/Index');

import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



class LayoutDemo01 extends Component {
  render() {
    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title:'首页',
          component:Index,
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});

AppRegistry.registerComponent('LayoutDemo01', () => LayoutDemo01);
