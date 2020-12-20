import React from 'react';
import PropTypes from 'prop-types';
import s from './Notify.module.css';

const Notify = ({ message }) => {
  return <p className={s.Notify}>{message}</p>;
};

Notify.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notify;
