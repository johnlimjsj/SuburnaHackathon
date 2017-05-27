import React, { Component, PropTypes } from 'react';
import { View, TextInput, Text, Platform, StyleSheet } from 'react-native';
import { Form, Item, Input, Picker,  Button } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import Parent from 'SuburnaHackathon/app/components/widgets/Parent'
import layout from 'SuburnaHackathon/app/styles/layout'
import s from './styles';

const inputs = ["title", "details"];

export default class NewRequestPage extends Component {

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
      	<View style={{padding: 10}}>
	        <Text>Want something that is not listed? </Text>
	        <Text>Make a request so that we can keep you notified when someone posts a relevant service.</Text>
	        <Text>Also announces to the app users that you have this request </Text>
        </View>


        <TextInput
          {...this.props} 
          ref={(x) => {this.title = x}}
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          style={{height: 40, margin: 2, padding: 10, fontSize: 15, borderWidth:1}}
          placeholder="Title of requested service"
          editable = {true}
          maxLength = {40}
        />
        <TextInput
          {...this.props} 
          ref={(x) => {this.details = x}}
          value={this.state.details}
          onChangeText={(details) => this.setState({details})}
          style={{height: 40, margin: 2, padding: 10, fontSize: 15, borderWidth:1}}
          placeholder="Description of desired service"
          editable = {true}
          maxLength = {40}
        />

        <View style={[layout.inlineView, layout.hPadding,  {padding: 10, justifyContent: 'space-between'}]}>
            <Button onPress={this.clearAllInputs}><Text>Clear All</Text></Button>
            <Button onPress={this.submitAllInputs}><Text>Submit</Text></Button>
          </View>

      </PageContainer>
    );
  }

  	state = {
	    selected: 'Goods',
	}

	onValueChange = (value) => {
	    this.setState({selected : value});
	}

  submitAllInputs = (e) => {
    const retVal = this.getAllInputs();
    this.clearAllInputs();
    // to parse the input at the server
  }

  getAllInputs = (e) => {
    const ret = []
    for(var i=0; i<inputs.length; i++){
      ret.push(this.state[inputs[i]])
    }
    return ret;
  }

  clearAllInputs = (e) => {
    this.setState({["title"]:''})
    this.setState({["details"]:''})
  }

}
