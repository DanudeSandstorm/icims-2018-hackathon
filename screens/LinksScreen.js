import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  CheckBox
} from 'react-native';
import Label from '../components/Label';
import _ from 'lodash';
const mysql = require('mysql');
const connection = mysql.createConnection({
 hostname: 'ih18-candy.c3hhbukspyur.us-east-1.rds.amazonaws.com',
 username: 'ih2018ken',
 password: 'Amelia12#',
 database: 'candycorn',
});

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Trick or Treater',
  };

  state = {
    gluten: false,
    nut: false
  }

  onComponentDidMount() {

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <Label text="Nut Free" />
           <CheckBox
             title="Nut Free"
             value={this.state.nut}
             onValueChange={() => {this.setState({nut: !this.state.nut}); _.debounce(this.updateNut.bind(this), 500)}}
           />
           <Label text="Gluten Free" />
           <CheckBox
             title="Gluten Free"
             value={this.state.gluten}
             onValueChange={() => {this.setState({gluten: !this.state.gluten}); _.debounce(this.updateGluten.bind(this), 500)}}
           />
      </ScrollView>
    );
  }

  updateNut() {
    connection.connect();

    connection.query(`UPDATE users SET NutFree=${this.state.nut} WHERE UserID=${}`, function (error, results, fields) {

    });

    connection.end();
  }

  updateGluten() {
    connection.connect();

    connection.query(`UPDATE users SET GlutenFree=${this.state.gluten} WHERE UserID=${}`, function (error, results, fields) {

    });

    connection.end();
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
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
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
