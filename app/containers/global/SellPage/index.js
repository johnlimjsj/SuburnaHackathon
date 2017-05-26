import React, { Component, PropTypes } from 'react';
import {TextInput, DatePickerIOS, View, Text, Platform, StyleSheet } from 'react-native';
import { Content, Form, Input, Label, Item, Picker, Switch, Header, Segment, Button, List, ListItem, Left, Body, Icon, Right} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import s from './styles';
import {tabs} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
import {itemCategories,serviceCategories} from 'SuburnaHackathon/app/containers/global/BrowsePage/content'
// should be getting this from the redux store


class SellPage extends Component {

  static propTypes = {  

  };

  static defaultProps = {

  };

  state = {
    activeTab: 'goods',
    selectedItem: 'goods',
    results: {
        items: []
    }
  };


  render() {
    const {activeTab} = this.state;

    return (
      <PageContainer>   

        <Segment>
          <Button 
            first 
            active={activeTab == tabs[0].name } 
            onPress={() => this.onTabPress(tabs[0].name)}>
              <Text>{tabs[0].verbose}</Text>
          </Button>
          <Button 
            last 
            active={activeTab == tabs[1].name}
            onPress={() => this.onTabPress(tabs[1].name)}>
            <Text>{tabs[1].verbose}</Text>
          </Button>
        </Segment>
        <Item label={tabs[1].verbose} value={tabs[1].name} />
        <ListItem itemDivider>
          <Text>Details</Text>
        </ListItem>


        <FormItemDetails
          icon="plane" text="Category" controlDesc="Choose One"
          controls={<MyPicker items={ activeTab=='services' ? serviceCategories : itemCategories}/>}
        />

        <FormItemDetails
          icon="md-add-circle" text="Item"
          controls={<TextInput
                      {...this.props} 
                      style={{height: 40, fontSize: 15, width:150, textAlign: 'right'}}
                      placeholder="What are you selling"
                      editable = {true}
                      maxLength = {40}
                    />}
        />

        <FormItemDetails
          icon="ios-pricetag" text="Price"
          controls={<TextInput
                      {...this.props} 
                      style={{height: 40, fontSize: 15, width:150, textAlign: 'right'}}
                      placeholder="Price"
                      editable = {true}
                      maxLength = {40}
                    />}
        />
        { activeTab=='services' && 
          <View>
            <FormItemDetails
              icon="car" text="Where" controlDesc="Select Location"
              controls={<Icon name="arrow-forward" />}
            />
            <FormItemDetails
              icon="ios-calendar" text="Dates Available" controlDesc="Select Date"
              controls={<Icon name="arrow-forward" />}
            />
            <FormItemDetails
              icon="ios-clipboard" text="Experience" controlDesc="Input your experience"
              controls={<Icon name="arrow-forward" />}
            />
          </View>
        }
        
        <ListItem itemDivider>
          <Text>Sharing</Text>
        </ListItem>
        

      </PageContainer>
    );
  }

  onTabPress = (tab) => {
    this.setState({activeTab: tab})
    console.log("active tab is", tab)
  };

  onValueChange = (value) => {
      this.setState({selectedItem : value});
  }
}

class FormItemDetails extends Component {

  static propTypes = {  
    icon:PropTypes.string,
    text: PropTypes.string,
    controlDesc: PropTypes.string,
    controls: PropTypes.object,
  };

  static defaultProps = {

  };


  render() {    
    const {icon, text, controlDesc, controls} = this.props

    return (
      <View>     
        <ListItem icon>
          <Left>
              <Icon name={icon} />
          </Left>
          <Body>
            <Text>{text}</Text>
          </Body>
          <Right>
            <Text>{controlDesc}</Text>
            {controls}
          </Right>
        </ListItem>

      </View>
    );
  }

}

class ServicesFormDetails extends Component {
  
}

module.exports = { SellPage }
