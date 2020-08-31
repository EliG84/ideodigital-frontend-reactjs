import React from 'react';
import { Link } from 'react-router-dom';

const ContactsDivAtMain = ({ content }) => {
  return (
    <Link to={content.url} className='jumbotron text-center'>
      <span className='display-4'>{content.text}</span>
    </Link>
  );
};

export default ContactsDivAtMain;
