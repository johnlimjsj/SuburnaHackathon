import React, { Component, PropTypes }  from 'react';

import { StackNavigator, TabNavigator } from 'react-navigation';
import BrowsePage from 'SuburnaHackathon/app/containers/global/BrowsePage/BrowsePage'
import GroupsPage from 'SuburnaHackathon/app/containers/global/GroupsPage/GroupsPage'

export const BrowseStack = StackNavigator({
  Browse: {
    screen: BrowsePage,
    path: '/',
    navigationOptions: {

    },
  },
  ItemPage: {
    screen: GroupsPage,
    navigationOptions: {
      title: 'Notifications',
    },
  },
});