
import React, { Component, PropTypes } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import DrawerNav from './components/Navigation/DrawerNav';
import TabNav from './components/Navigation/TabNav';

export default class CodeSharing extends Component {
  
  state = {
    drawerOpen: true
  };

  render() {

    return ( 

      <TabNav/>
    )
  }
}
