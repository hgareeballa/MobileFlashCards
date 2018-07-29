import React from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleAnswer } from '../actions/quizActions';
import { FontAwesome } from '@expo/vector-icons'
import { styles } from '../utils/mystyle'


const QuestionView = ({
  currentQuestionNum,
  question,
  quizLength,
  showAnswer,
}) => (
    <View>
      <View style={styles.item} >
        <Text style={styles.text}>{question}</Text>
      </View>

      <TouchableOpacity onPress={() => showAnswer()}
      >
        <View style={styles.item2}>
          <Text style={styles.text2}><FontAwesome name='eye' size={20}>
            Show Answer
    </FontAwesome>         </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.item}>
        <Text>
          {quizLength - currentQuestionNum} question(s) remaining including this one
      </Text>
      </View>
    </View>
  );

QuestionView.propTypes = {
  currentQuestionNum: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  quizLength: PropTypes.number.isRequired,
  showAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  quizLength: state.decks[ownProps.deckTitle].quizLength,
  currentQuestionNum: state.quiz.quizNumbers.questionNumber,
});

const mapDispatchToProps = dispatch => ({
  showAnswer: () => {
    dispatch(toggleAnswer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionView);

