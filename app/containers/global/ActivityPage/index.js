import React, { Component, PropTypes } from 'react';
import { Button, Text, Platform, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body, Icon, Right} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';
import {items, activities} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
import AppointmentDetailPage from './AppointmentDetailPage'

class ActivityPage extends Component {

  render() {
    
    return (
      <PageContainer>     
        <ListItem itemDivider>
          <Text>Upcoming Appointments</Text>
        </ListItem>
        <List>
          {items.map((item, index) => (
            <ListItem onPress={() => this.props.navigation.navigate('AppointmentDetailPage', {details: item})} key={index} >
                <Left><Text>{item.date} | {item.event} with {item.person}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
        </List>

        <ListItem itemDivider>
          <Text>Item Tracking</Text>
        </ListItem>

        <ListItem itemDivider>
          <Text>Activity Feed</Text>
        </ListItem>

        <List>
          {activities.map((activity, index) => (
            <ListItem>
                <Left><Text><MaterialIcons name={activity.icon} />  {activity.person} {activity.action}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
        </List>

      </PageContainer>
    );
  }
}


module.exports = { ActivityPage, AppointmentDetailPage}
