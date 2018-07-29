import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import {styles} from '../utils/mystyle'

import {
  handleCorrectAnswer,
  handleIncorrectAnswer,  
} from '../actions/quizActions';

const AnswerView = ({
  answer,
  currentQuestion,
  userCorrectAnswer,
  totalQuizQuestions,
  userIncorrectAnswer,  
}) => {
  const buttonOnPressVariations = () => {        
    return (
      <View  style={styles.item3}>
      <View style={styles.item_cor}>
        <SimpleLineIcons style={styles.submitBtnText}
          name='user-following' size={50}
          onPress={() => userCorrectAnswer()} >Correct. </SimpleLineIcons>
          </View>
      <View style={styles.item_wrong}>
        <SimpleLineIcons style={styles.submitBtnText}
          name='user-unfollow' size={50}
          onPress={() => userIncorrectAnswer()} > Wrong. </SimpleLineIcons>
          </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.item}>
        <Text style={styles.text}>{answer}</Text>        
        {buttonOnPressVariations()}        
      </View>
      <View style={styles.item}> 
        <Text>
        {totalQuizQuestions - currentQuestion} question(s) remaining including
        this one
        </Text>
      </View>
    </View>
  );
};

AnswerView.propTypes = {
  answer: PropTypes.string.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuizQuestions: PropTypes.number.isRequired,
  userCorrectAnswer: PropTypes.func.isRequired,
  userIncorrectAnswer: PropTypes.func.isRequired,  
};

const mapDispatchToProps = dispatch => ({
  userCorrectAnswer: () => {
    dispatch(handleCorrectAnswer());
  },
  userIncorrectAnswer: () => {
    dispatch(handleIncorrectAnswer());
  },  
});

export default connect(null, mapDispatchToProps)(AnswerView);