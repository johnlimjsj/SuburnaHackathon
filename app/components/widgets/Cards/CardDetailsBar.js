import React, { Component, PropTypes } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class CardDetailsBar extends Component {

  static propTypes = {  
    name: PropTypes.string,
    price: PropTypes.number,
    likes: PropTypes.number,

  };

  static defaultProps = {

  };

    render() {

      const { name, price, likes} = this.props;

      return (
        <View>
          <Text>{name}</Text> 
          <Text>${price}</Text>              
          <Text> <Icon active name="heart" /> {likes} </Text>
        </View>
      );
    }
}