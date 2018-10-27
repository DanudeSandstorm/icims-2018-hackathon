import React from 'react';
import {
  ScrollView,
  StyleSheet,
  CheckBox } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  state = {
    gluten: false,
    nut: false
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           <Text style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row',}}>Nut Free</Text><CheckBox
             title="Nut Free"
             value={this.state.nut}
             onValueChange={() => this.setState({nut: !this.state.nut})}
           />
           <Text>Gluten Free</Text><CheckBox
             title="Gluten Free"
             value={this.state.gluten}
             onValueChange={() => this.setState({gluten: !this.state.gluten})}
           />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
