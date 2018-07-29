import React, { Component } from 'react';
import {ActivityIndicator, Text, View, Image, StyleSheet, TextInput, Alert, Platform,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addNewCard } from '../actions/deckActions'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import {styles} from '../utils/mystyle'

class NewQuestion extends Component {
  state = {
    question: '',
    answer: '',
    loading:false
  };

  addNewQuestionfunction = () => {
    const { question,answer } = this.state;
    if (question.length < 1) {
      return Alert.alert(
        'Error!!!!',
        'Enter Question Please .',
        { text: 'OK' },
        { cancelable: false }
      );
    }
    if (answer.length < 1) {
      return Alert.alert(
        'Error!!!!',
        'Enter Answer Please.',
        { text: 'OK' },
        { cancelable: false }
      );
    }
    const { title } = this.props.navigation.state.params;
    const payload = {
      title,
      question: question,
      answer: answer,
    };
    this.props.dispatch(addNewCard(payload))    
    this.setState({loading:true}) 
    setTimeout(() => {
      this.props.navigation.goBack(); 
      this.setState({loading:false}) 
    }, 1000);

  };

  render() {
    const { navigate } = this.props.navigation
    const { title } = this.props.navigation.state.params;
    return (
      <View style={styles.container} >
        <View style={styles.item}>
        <Text style={styles.text}> {title} </Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          fieldLabel="What question would you like to add?"
          maxLength={100}
          placeholder="Question"
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          fieldLabel="What answer would you like to add?"
          maxLength={100}
          placeholder="Answer"
          onChangeText={answer => this.setState({ answer })}
        />        

        <TouchableOpacity  onPress={() => this.addNewQuestionfunction()}>
        <View style={styles.item_save_btn}>
        <FontAwesome  name='save' size={20}>Submit</FontAwesome>
        </View>
        </TouchableOpacity>

        {this.state.loading?<ActivityIndicator size="large" color="#0000ff" />: null }
        </View>
      </View>
    );
  }
}

export default connect()(NewQuestion);
