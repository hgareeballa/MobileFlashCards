import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuestionView from './QuestionView';
import AnswerView from './AnswerView';
import QuizScore from './QuizScore';
import { styles } from '../utils/mystyle'

export const selectQuizLength = (data, title) => data.decks[title].quizLength;
export const selectQuestionsAndAnswers = (data, title) => data.decks[title].questions;

const QuizView = ({
  currentQuestion,
  deckTitle,
  questionsAndAnswers,
  showAnswer,
  showQuestion,
  totalQuizQuestions,
  userCorrectScore,
  userIncorrectScore,
}) => {
  if (questionsAndAnswers[currentQuestion] !== undefined) {
    return (
      <View style={styles.container}>
        <View>
          {showQuestion && (
            <QuestionView
              deckTitle={deckTitle}
              question={questionsAndAnswers[currentQuestion].question}
            />
          )}
          {showAnswer && (
            <AnswerView
              answer={questionsAndAnswers[currentQuestion].answer}
              currentQuestion={currentQuestion}
              deckTitle={deckTitle}
              totalQuizQuestions={totalQuizQuestions}
            />
          )}
        </View>
      </View>
    );
  }
  return (
    <QuizScore
      totalQuizQuestions={totalQuizQuestions}
      userCorrectScore={userCorrectScore}
      userIncorrectScore={userIncorrectScore}
    />
  );
};

QuizView.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  deckTitle: PropTypes.string.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showQuestion: PropTypes.bool.isRequired,
  totalQuizQuestions: PropTypes.number.isRequired,
  userCorrectScore: PropTypes.number.isRequired,
  userIncorrectScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentQuestion: state.quiz.quizNumbers.questionNumber,
  showAnswer: state.quiz.quizDisplay.toggleAnswer,
  showQuestion: state.quiz.quizDisplay.toggleQuestion,
  deckTitle: ownProps.navigation.state.params.title,
  questionsAndAnswers: selectQuestionsAndAnswers(
    state,
    ownProps.navigation.state.params.title
  ),
  totalQuizQuestions: selectQuizLength(
    state,
    ownProps.navigation.state.params.title
  ),
  userCorrectScore: state.quiz.quizNumbers.quizScoreCorrect,
  userIncorrectScore: state.quiz.quizNumbers.quizScoreIncorrect,
});

export default connect(mapStateToProps)(QuizView);
