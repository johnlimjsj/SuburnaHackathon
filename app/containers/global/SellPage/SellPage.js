import React, { Component, PropTypes } from 'react';
import { Button, Text, Platform, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from '../../../components/widgets/Container/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';

export default class SellPage extends Component {

  render() {
    return (
      <Container>
        <HeaderBar 
          body="Sell Goods & Services"
          navigation={this.props.navigation}/>
        <Text> This is a page </Text>
    <Button
      onPress={() => this.props.navigation.navigate('ServicesPage')}
      title="Open Services screen"
    />
        <Button 
          title="Nav to login"
          onPress={() => this.props.navigation.navigate('LoginPage')}/>
      </Container>
    );
  }
}