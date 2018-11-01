import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';
import DynamoDB from 'react-native-dynamodb'




export default class Login extends Component {
    

  state = {
    location: "Treater",
    searchtext: ""
  }

  render() {
    return (
        <ScrollView style={styles.scroll}>
           
            <Container>
                <Label text="Email" />
                <TextInput
                    style={styles.textInput}
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                />
            </Container>
            <Container>
                <Label text="Password" />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />
            </Container>
            
            <Container>
                <Label text="Login Method: " />
            <Picker
              selectedValue={this.state.location}
              style={{ height: 50, width: 150, alignSelf: 'center'}}
              onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
              <Picker.Item label="Treater" value="Treater" />
              <Picker.Item label="Tricker" value="Home" />
            </Picker>
            </Container>


            <View style={styles.footer}>
                <Container>
                    <Button
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                        onPress={this.press.bind(this)} />
                </Container>
               
            </View>
        </ScrollView>
    );
  }


  press(e) {
  
        if (this.error) {
            this.state.password = ""; // invalid login
        }
         else {   

         this.props.navigation.navigate("Home");
         }
        }
  }


const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    footer: {
       marginTop: 100
    }
});
