import React, { Component } from 'react';
import { FlatList, View, Text, Alert,TouchableOpacity,Platform} from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { purple, white, blue, gray} from '../utils/colors'
import {styles} from '../utils/mystyle'
import {resetQuiz} from '../actions/quizActions'

import PropTypes from 'prop-types';

addCardClick = () => {
  console.log("openDeck Button Cliked");
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
};

class IndiDeckView extends Component {  
  componentDidMount(){
    this.props.dispatch(resetQuiz());
  }
  render() {
    const { title, questions } = this.props.navigation.state.params;
    const { quizLength } = this.props

    return (
      {title}?
      <View style={styles.container}>        
           <View style={styles.item}>                
                <Text style={styles.text}> <Ionicons color="red" size={25} name='ios-list-box-outline'/>[{title}]</Text>                                             
                <Text style={styles.text}> <FontAwesome color="red" size={25} name='question'/>:[{quizLength}] Cards</Text>                                                              
            </View>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NewQuestion', { title })} > 
              <View style={styles.item2}>                                
                <Ionicons style={styles.submitBtnText}name='ios-add-circle-outline' size={30}>
                Add Card
                </Ionicons>  
                </View>
            </TouchableOpacity>
                                          
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('QuizView', {title,questions})}>                                          
              <View style={styles.item2} >                                   
                <FontAwesome style={styles.submitBtnText}name='hourglass-start' size={30}>
                Start Quiz 
                </FontAwesome>              
            </View>
            </TouchableOpacity>                                     
      </View>:
      <Text>Noting here !</Text>
    );
  }
}//

IndiDeckView.propTypes = {  
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.decks[ownProps.navigation.state.params.title].quizLength,
});
export default connect(mapStateToProps)(IndiDeckView);
