import React, { Component } from 'react';
import { Alert, DatePickerIOS, View ,Text,StyleSheet,Platform} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {styles} from '../utils/mystyle'

import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/help';


class NotifyMe extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenTime: new Date() };
    this.setTime = this.setTime.bind(this);
  }

  setTime(newTime) {
    this.setState({ chosenTime: newTime });
  }

  render() {
    const displayConfirmNotificationAlert = (string) => {
      Alert.alert(
        'Notifications',
        `are ${string}`,
        { text: 'OK' },
        { cancelable: false }
      );
    };
    return (
      <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Set daily reminder</Text>
        <DatePickerIOS
          date={this.state.chosenTime}
          onDateChange={this.setTime}
          mode="time"
        />     
        <View style={styles.item_cor}>    
                <FontAwesome
                    name='save'
                    size={20}
                onPress={() =>
                    clearLocalNotification()
                    .then(setLocalNotification(this.state.chosenTime))
                    .then(displayConfirmNotificationAlert('activated.'))
                }
                >
                Submit
                </FontAwesome>
        </View>
        <View style={styles.item_wrong}>
                <FontAwesome
                name='close'  
                size={20}        
                onPress={() =>
                    clearLocalNotification().then(displayConfirmNotificationAlert('cancelled.'))
                }
                >
                Clear Notifications
                </FontAwesome>
        </View>
        </View>
      </View>
    );
  }
}

export default NotifyMe;