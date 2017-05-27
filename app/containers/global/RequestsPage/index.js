import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text, Platform, StyleSheet } from 'react-native';
import { Form, Item, Input, Picker,  Button, Body, List, ListItem, Left, Right, Icon } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import Parent from 'SuburnaHackathon/app/components/widgets/Parent'
import layout from 'SuburnaHackathon/app/styles/layout'
import NewRequestPage from './NewRequestPage'
import {items, responses} from './content'
import s from './styles';

const inputs = ["title", "details"];

export class RequestsPage extends Component {

	state = {
		title: '',
		details: '',
	}

  render() {
  	const requests = [{
  		name: "Goods",
  	}, {
  		name: "Services"
  	}];  	

    return (
      <PageContainer>
		

		<List>
			<ListItem>		
				<Button onPress={() => this.props.navigation.navigate('NewRequestPage', { })}>
					<Text>Make a new Request</Text>
				</Button>
			</ListItem>
			<ListItem itemDivider>
	          <Text>Recommended Goods / Services based on analytics</Text>
	        </ListItem>
          {items.map((item, index) => (
            <ListItem onPress={() => this.props.navigation.navigate('AppointmentDetailPage', {})} key={index} >
                <Left><Text>{item.date} | {item.event} with {item.person}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
          <ListItem itemDivider>
	          <Text>Responses to your request</Text>
	      </ListItem>
	      {responses.map((response, index) => (
            <ListItem onPress={() => this.props.navigation.navigate('AppointmentDetailPage', {})} key={index} >
                <Left ><Text>{response.name}:</Text></Left>
                <Body><Text style={{marginLeft: -50,}} >{response.message}</Text></Body>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
        </List>




      </PageContainer>
    );
  }


}

module.exports = {RequestsPage, NewRequestPage}
