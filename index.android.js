/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import I18n from 'react-native-i18n';

export default class ReactNativeLocalization extends Component {

  componentDidMount() {
    const deviceLocale = I18n.locale;
    const holdTight = I18n.t('holdTight');
    console.log(holdTight);
    console.log('Devices locale');
    console.log(deviceLocale);

    this.test();
  }

  test()
  {
    // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
    I18n.fallbacks = true
    I18n.translations = {
      en: {
        greeting: 'Hi!'
      },
      fr: {
        greeting: 'Bonjour!'
      }
      //const holdTight = I18n.t('greeting');
      //console.log(holdTight);
  }
 }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {I18n.t('signing')}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
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

AppRegistry.registerComponent('ReactNativeLocalization', () => ReactNativeLocalization);
