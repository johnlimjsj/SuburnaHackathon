import React, { Component, PropTypes } from 'react';
import { Text, Button, Platform, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from '../../../components/widgets/Container/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';

export default class RequestsPage extends Component {

  render() {
    return (
      <Container>
        <HeaderBar 
          body="Requests"
          navigation={this.props.navigation}/>

        <Text> This is a page </Text>
      </Container>
    );
  }
}
