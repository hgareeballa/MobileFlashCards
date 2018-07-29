import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetQuiz } from '../actions/quizActions';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../utils/mystyle'

const QuizScore = ({
  totalQuizQuestions,
  userCorrectScore,
  userIncorrectScore,
  userResetQuiz,
}) => (
    <View>
      <View style={styles.item}>
        <Text>
          You got {userCorrectScore} right and {userIncorrectScore} incorrect from a
          total of {totalQuizQuestions} questions.
        </Text>
        <MaterialCommunityIcons style={styles.submitBtnText}
          name='notification-clear-all' size={50} onPress={() => userResetQuiz()}>
          Restart Quiz
        </MaterialCommunityIcons>
      </View>
      <View style={styles.item}>
        <MaterialCommunityIcons style={styles.submitBtnText}
          name='percent' size={50}>
          {(userCorrectScore/totalQuizQuestions).toFixed(2) * 100} Correct Answers
        </MaterialCommunityIcons>
      </View>
    </View>
  );

QuizScore.propTypes = {
  totalQuizQuestions: PropTypes.number.isRequired,
  userCorrectScore: PropTypes.number.isRequired,
  userIncorrectScore: PropTypes.number.isRequired,
  userResetQuiz: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userQuizScore: state.quiz.quizNumbers.quizScore,
});

const mapDispatchToProps = dispatch => ({
  userResetQuiz: () => {
    dispatch(resetQuiz());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizScore);

