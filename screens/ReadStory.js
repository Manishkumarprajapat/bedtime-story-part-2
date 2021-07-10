import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { SearchBar ,Header} from 'react-native-elements';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';


export default class ReadStory extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      allStories: [],
      dataSource: [],
      
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  componentDidMount = () => {
    this.retrieveStories();
  };

  retrieveStories = () => {
    try {
      var allStories = [];
      var stories = db
        .collection('stories')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allStories.push(doc.data());
            console.log('this are the stories', allStories);
          });
          this.setState({
            allStories,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.allStories.filter((item)=> {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }


  render() {
   // console.log('render', this.state.allStories);
    return (
      <View style ={styles.container}>
           <Header 
                backgroundColor = {'pink'}
                centerComponent = {{
                    text : 'Bed Time Stories',
                    style : { color: 'white', fontSize: 20}
                }}
            />
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here..."
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>
        <FlatList
                data={this.state.search === "" ?  this.state.allStories: this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Text>  Title: {item.title}</Text>
                    <Text>  Author : {item.author}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          
          
          
        </View>  
      );      
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  }
});