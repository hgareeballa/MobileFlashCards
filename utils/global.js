//React General
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white } from './colors'

//Components
import DeckList from '../components/DeckList'
import IndiDeckView from '../components/IndiDeckView'
import NewDeck from '../components/NewDeck'
import NewQuestion from '../components/NewQuestion'
import QuizView from '../components/QuizView'
import NotifyMe from '../components/NotifyMe'



export const UdaciStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}// StatusBar

export const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck View List',
      title: 'Deck View List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box-outline' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      title: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={30} color={tintColor} />
    }
  },
  NotifyMe: {
    screen: NotifyMe,
    navigationOptions: {
      tabBarLabel: 'Settings',
      title: 'Settings',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-settings' size={30} color={tintColor} />
    }
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

export const MainNavigator = createStackNavigator(
  {
    Home: { screen: Tabs },
    DeckList: { screen: DeckList, navigationOptions: { title: 'Deck List' } },
    IndiDeckView: { screen: IndiDeckView, navigationOptions: { title: 'Deck View' } },
    NewDeck: { screen: NewDeck, navigationOptions: { title: 'Create New Deck' } },
    NewQuestion: { screen: NewQuestion, navigationOptions: { title: 'Create New Question' } },
    QuizView: { screen: QuizView, navigationOptions: { title: 'Start Quiz' } },
    NotifyMe: { screen: NotifyMe, navigationOptions: { title: 'Notifications Settings' } },
  }, {
    headerMode: 'float',
    mode: 'modal',
    navigationOptions: { gesturesEnabled: false }
  }
);

Tabs.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  // You can do whatever you like here to pick the title based on the route name
  //let headerTitle = routeName ;
  let headerTitle =
    <Ionicons name='ios-home' size={30} onPress={() => navigation.navigate('DeckList')}>
      {routeName}
    </Ionicons>;
  return {
    headerTitle,
  };
};




