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
const mysql = require('mysql');
const connection = mysql.createConnection({
 hostname: 'ih18-candy.c3hhbukspyur.us-east-1.rds.amazonaws.com',
 username: 'ih2018ken',
 password: 'Amelia12#',
 database: 'candycorn',
});


export default class Login extends Component {

  state = {
    location: "Treater",
    searchtext: ""
  }

  render() {
    return (
        <ScrollView style={styles.scroll}>
            {/*<Picker
              selectedValue={this.state.location}
              style={{ height: 50, width: 200, backgroundColor: "white" }}
              onValueChange={(itemValue, itemIndex) => this.setState({location: itemValue})}>
              <Picker.Item label="Treater" value="Treater" />
              <Picker.Item label="Home" value="Home" />
            </Picker>*/}

            <Container>
                <Label text="Username or Email" />
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


            <View style={styles.footer}>
                <Container>
                    <Button
                        label="Sign In"
                        styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                        onPress={this.press.bind(this)} />
                </Container>
                {/*<Container>
                    <Button
                        label="CANCEL"
                        styles={{label: styles.buttonBlackText}}
                        onPress={this.press.bind(this)} />
                </Container>*/}
            </View>
        </ScrollView>
    );
  }

  press(e) {
    connection.connect();

    connection.query(`SELECT Password, StayID FROM users WHERE Email=${this.state.username}`, function (error, results, fields) {
        if (this.error) {
            this.state.password = ""; // invalid login
        }
        if (results[0].Password == this.state.password) {
            if (results[0].StayID > 0) {
                this.props.navigation.navigate("Home");
            } else {
                this.props.navigation.navigate("Treater");
            }
        } else {
            this.state.password = ""; // invalid login
        }

    });

    connection.end();
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
