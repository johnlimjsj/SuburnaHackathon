import React, { Component, ViewPropTypes } from 'react';
import { ScrollView, View, Button, Text, Platform, StyleSheet } from 'react-native';
import { Left, Body} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from 'SuburnaHackathon/app/components/widgets/Container/Container'
import HeaderBar from 'SuburnaHackathon/app/components/HeaderBar/HeaderBar'
import SearchBar from 'SuburnaHackathon/app/components/widgets/SearchBar/SearchBar'
import CardImage from 'SuburnaHackathon/app/components/widgets/Cards/CardImage'
import CardDetailsBar from 'SuburnaHackathon/app/components/widgets/Cards/CardDetailsBar'
import {itemcards, servicecards} from './content'

import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'

export default class BrowsePage extends Component {
  
  state = {
    open: "none",
  }


  render() {
    const src1 = "SuburnaHackathon/app/img/Cards/johnPassportPhoto.png"
    const cards = itemcards
    return (
      <View >
        <SearchBar/>
        <ScrollView style={layout.halfScreen}>
        <View style={layout.inlineView}>
          {cards.map((card, index) => (
            <CardImage
              key={index}
              src={src1}
              bottom={<CardDetailsBar name={card.name} price={card.price} likes={card.likes}/>}
              />
          ))}
        </View>
        </ScrollView>
      </View>
    );
  }
}
