import React, { Component, PropTypes } from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default class Container extends Component {

  render() {
    return (
      <ScrollView>
        {this.props.children}
      </ScrollView>
    );
  }
}
