/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Search from './src/searchBar/search';
import axios from 'axios';

// type Props = {};
export default class App extends Component {
  constructor() {
    super();
    this.state = {
			imgs: []
    };
    // this.performSearch = this.performSearch.bind(this);
  }
  componentDidMount() {
    axios
    .get('https://api.unsplash.com/photos/?client_id=4f367c886c1519a6adacf830859de46d312437e4c7cd36d95bcf9d1103b266f5'
  )
  .then(
    data => {
    this.setState({ imgs: data });
  })

  .catch(err => {
    console.log('Error happened during fetching!', err);
  });
  // this.performSearch();
  }

  render() {
    return (
      <View 
      // style={styles.container}
      >
        <Search />
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
