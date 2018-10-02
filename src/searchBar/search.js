import React, { Component } from 'react';
import { TextInput,StyleSheet, View,SafeAreaView, Button } from 'react-native';


export default class Search extends Component {
    render() {
        return (
            <View>
            <SafeAreaView>
            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
      />
      <Button
//   onPress={onPressLearnMore}
  title="Search"
  color="#841584"
//   accessibilityLabel="Learn more about this purple button"
/>
      </SafeAreaView>
      </View>
        );
    }
}