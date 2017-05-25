import React, { Component, PropTypes }  from 'react';
import { Text, View, Image, Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {pages} from './pages'

class CustomDrawer extends Component {
  render() {
    const {...rest} = this.props;
    return (
      <View>
        <Text>This is the custom drawer component</Text>
        <Text>Feel free to customize here</Text>
        <DrawerItems {...rest} />
      </View>
    )
  }
}

let drawerPages = {}
pages.map((page, index) => {
  (page.screen.navigationOptions = {
    tabBarLabel: page.label,
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name={page.icon}
        size={24}
        style={{ color: tintColor }}
      />
    ),
  }),
  (drawerPages[page.name]={
    path: page.path,
    screen: page.screen,
  })
})

const TabNav = TabNavigator(  
  drawerPages, {    
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      tabStyle: {
        width: 100,    
      },
      style: {
        // position: "fixed",
        // bottom: 0,
      }
    },
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default TabNav;


// const StacksOverTabs = StackNavigator({
//   Root: {
//     screen: TabNav,
//   },
//   ServicesPage: {
//     screen: ServicesPage,
//     navigationOptions: {
//       title: 'Services Stack',
//     },
//   }
// });