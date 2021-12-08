/* eslint-disable react/prop-types */
import React from 'react';

const styles = {
  height: '300px',
  textAlign: 'center',
  fontSize: '30px',
  marginTop: '50px',
};

const Error = ({ message }) => (
  <div style={styles}>{message}</div>
);

export default Error;
