import React from 'react';
import { useSelector } from 'react-redux';
import ContactsDivAtMain from './ContactsDivAtMain';

const ContactsMain = (props) => {
  const { divContentInMain } = useSelector((state) => state);

  return (
    <div className='d-flex flex-column'>
      {divContentInMain.map((c, i) => (
        <ContactsDivAtMain key={i} content={c}></ContactsDivAtMain>
      ))}
    </div>
  );
};

export default ContactsMain;
