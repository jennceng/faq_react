import React from 'react';
import Question from './Question.js'



const QuestionList = props => {
  let questions = props.questions.map(question => {
    return (
      <Question
        key={question.id}
        question={question.title}
        answer={question.answer}
      />
    );
  });

  return(
    <ul>
      {questions}
    </ul>
  );
};

export default QuestionList;
