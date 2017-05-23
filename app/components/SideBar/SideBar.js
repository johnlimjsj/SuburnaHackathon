
import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Thumbnail, Container, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import sidebarStyle from './style'

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {  
    };
  }

  // static propTypes = {  
  //   left: PropTypes.object,
  //   body: PropTypes.object,
  //   right: PropTypes.object,
  // };

  // static defaultProps = {

  // };

  render() {
    return (
      <View style={sidebarStyle.mainContainer}>
        <Container >
          <Thumbnail size={150} style={{backgroundColor:"black"}} source={require('./johnPassportPhoto.png')}/>
          <Text style={{backgroundColor:"green"}}>This is a side bar</Text>
        </Container>
      </View>
      
    )
  }
}

export default SideBar;