import React from 'react';
import {View} from 'react-native';

export default class SettingsScreen extends React.Component {

  componentWillMount() {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (<View />);
  }
}
