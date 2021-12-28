/* eslint-disable react/prop-types */
import React from 'react';
import styles from './support.module.css';

const SupportContent = ({
  id, question, answer, isOpen, onClick,
}) => (
  <>
    <button
      className={isOpen ? styles.supportQuestionsOpen : styles.supportQuestions}
      id={id}
      type="button"
      onClick={() => onClick(id)}
    >
      {question}
    </button>
    {isOpen
      ? (
        <div className={styles.supportAnswerContent}>
          <div className={styles.supportAnswer} id="answer">
            <pre className={styles.supportAnswerText}>{answer}</pre>
          </div>
          <div className={styles.supportBackground} />
        </div>
      ) : false}
  </>
);

export default SupportContent;
