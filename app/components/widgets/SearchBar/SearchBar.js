import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

export default class SearchBar extends Component {
    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        );
    }
}