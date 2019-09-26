import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import * as DATA from '../config/data';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    this.setState({data: this.loadData()});
  }

  loadData() {
    return DATA.contacts;
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Contacts Screen</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.email}</Text>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

export default Contacts;
