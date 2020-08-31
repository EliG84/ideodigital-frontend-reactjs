import React from 'react';
import { Link } from 'react-router-dom';

const ContactsHeader = (props) => {
  return (
    <div className='nav bg-dark text-light'>
      <Link to={'/'} className='text-light'>
        <p className='font-weight-bold float-left ml-2'>Contact List</p>
      </Link>
    </div>
  );
};

export default ContactsHeader;
