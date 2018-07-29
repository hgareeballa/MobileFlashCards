import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Image, StyleSheet, TextInput, Alert, Platform ,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions/deckActions'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { navigator } from 'react-navigation';
import {styles} from '../utils/mystyle'


class NewDeck extends Component {
  state = {
    title: '',
    loading: false
  }
  addNewDeckfunction = (payload) => {
    const { navigate } = this.props.navigation    
    const { title } = this.state;
    if (title.length < 1) {
      Alert.alert(
        'Error!!!!',
        'Please Enter Deck Name.',
        { text: 'OK' },
        { cancelable: false }
      );
    } else {      
      this.props.dispatch(addNewDeck(payload))
      this.setState({ loading: true })
      setTimeout(() => {
        this.props.navigation.navigate('DeckList')
        this.setState({ loading: false })   
        this.setState({ title: '' })     
      }, 1000);

    }
  }//..//

  render() {
    const { navigate } = this.props.navigation
    const { loading } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.item}><Text style={styles.text}>What is the title of your new deck?</Text>
          <View>
            <TextInput
              style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={(title) => this.setState({ title })}
              value={this.state.title}
              placeholder="title"
            />
            <TouchableOpacity
            onPress={() => this.addNewDeckfunction(this.state)}
            >
            <View style={styles.item_save_btn}> 
            <FontAwesome  name='save' size={20}>
             Save
            </FontAwesome>
            </View>
            </TouchableOpacity>

            {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
          </View>
        </View>
      </View>
    );
  }
}

export default connect()(NewDeck);

