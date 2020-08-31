import React from 'react';
import { Link } from 'react-router-dom';

const ContactsNav = () => {
  return (
    <div className='col row justify-content-center'>
      <Link to='/contacts/all' className='btn-link mx-2'>
        Contact List
      </Link>
      <Link to='/contacts/add' className='btn-link mx-2'>
        Add Contact
      </Link>
      <Link to='/contacts/total' className='btn-link mx-2'>
        Show Total
      </Link>
    </div>
  );
};

export default ContactsNav;
