import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ToastAndroid,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class WriteStory extends React.Component {
  constructor() {
    super();
    this.state = {
     title: '',
     author: '',
     storyText: '',
     buttonState:'normal'
       };
  }

  submitStory = () =>{
    db.collection('stories').add({
      author:this.state.author,
      title:this.state.title,
      storyText:this.state.storyText
    })
   
    this.setState({
      title:'',
      author:'',
      storyText:'',
    })
     ToastAndroid.show("manish",ToastAndroid.LONG)
  }

  render() {
    return (
      <KeyboardAvoidingView
       style={styles.container}
          behavior="padding"
          enabled
      >
      <View style={styles.container}>
      
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
          placeholder = "title"
          value={this.state.title}
        />

        <TextInput
          style={styles.inputBoxes}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
          placeholder = "author"
          value={this.state.author}
        />

        <TextInput
          style={styles.inputMan}
          onChangeText={(text) => {
            this.setState({ storyText: text });
          }}
          placeholder = "story"
          value={this.state.storyText}
          multiline={true}
        />

        <TouchableOpacity 
        style={styles.button}
        onPress={this.submitStory}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputBoxes: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  inputMan: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 140,
    textAlign: 'left',
    borderWidth: 4,
    outline: 'none',
  },
  button: {
    margin: 50,
    height: 40,
    width: 100,
    backgroundColor: 'blue',
    marginLeft: 110,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
