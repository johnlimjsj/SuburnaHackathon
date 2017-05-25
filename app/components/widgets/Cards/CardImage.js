import React, { Component, PropTypes } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class CardImage extends Component {

  static propTypes = {  
    top: PropTypes.object,
    src: PropTypes.string,
    bottom: PropTypes.object,
  };

  static defaultProps = {
    body: "Header",
  };

    render() {
      const {top, src, bottom} = this.props;
      // const _src = {src:require({src})}

      return (
        <View style={{width: "50%", height: "auto"}}>
          <Card >
            <CardItem>
              {top}
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{width: "100%", height: 50}}

                />
            </CardItem>
            <CardItem>
              {bottom}
            </CardItem>
          </Card>
        </View>
      );
    }
}