import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import WriteStory from './screens/WriteStory';
import ReadStory from './screens/ReadStory';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'blue'}
            centerComponent={{
              text: 'Story Hub',
              style: { color: 'black', fontSize: 20 },
            }}
          />
          <AppContainer />
        </View>
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStory },
    ReadStory: { screen: ReadStory },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        // console.log(routeName)
        if (routeName === 'WriteStory') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'ReadStory') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
