import React, { Component, PropTypes } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { Switch, Header, Segment, Button, List, ListItem, Left, Body, Icon, Right} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';
// import {items, activities} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'


class SellPage extends Component {

  static propTypes = {  

  };

  static defaultProps = {

  };

  state = {
    activeTab: 'goods',
  };


  render() {

    const {activeTab} = this.state;
    const tabs = [{
      name:'goods',
      verbose: 'Goods'

    }, {
      name:'services',
      verbose: 'Services'
    }];

    const aprop = "active"
    
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
        <ListItem itemDivider>
          <Text>Details</Text>
        </ListItem>
        {/*<List 
                   dataArray={items}
                   renderRow={(item) =>
                     <ListItem 
                       onPress={() => this.props.navigation.navigate('AppointmentDetailPage', {details: item})}
                     >
                         
                         
                         <Right><Icon name="arrow-forward" /></Right>
                     </ListItem>
                       }>
                 </List>*/} 

        <ListItem itemDivider>
          <Text>Sharing</Text>
        </ListItem>

        <ListItem itemDivider>
          <Text>Activity Feed</Text>
        </ListItem>

        <FormDetails/>

      </PageContainer>
    );
  }

  onTabPress = (tab) => {
    this.setState({activeTab: tab})
    console.log("active tab is", tab)
  };
}

class FormDetails extends Component {
  render() {

    
    return (
      <View>     
        <ListItem icon>
          <Left>
              <Icon name="plane" />
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
              <Switch value={false} />
          </Right>
        </ListItem>

      </View>
    );
  }

}

class ServicesFormDetails extends Component {
  
}

module.exports = { SellPage }
