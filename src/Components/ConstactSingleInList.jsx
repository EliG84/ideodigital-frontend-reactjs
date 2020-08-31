import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FcAddressBook, FcCallback, FcVoicePresentation } from 'react-icons/fc';
import * as Api from '../Services/ApiService';
import { loadContacts } from '../Redux/ContactsStore';

const ContactsSingleInList = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const data = await Api.deleteContact(contact._id);
    dispatch(loadContacts(data));
  };
  return (
    <div className='jumbotron p-1 m-1'>
      <div className='d-flex flex-column flex-md-row justify-content-between aling-items-center'>
        <div className='text-center text-lg-left'>
          <p className='font-weight-bold'>
            <FcVoicePresentation /> {contact.firstName} {contact.lastName}
          </p>
        </div>
        <div className='d-flex flex-column flex-md-row text-center text-md-left'>
          <p className='text-center text-lg-left mx-md-1 font-weight-bold'>
            <FcAddressBook /> {contact.email}
          </p>
          <p className='text-center text-lg-left mx-md-1 font-weight-bold'>
            <FcCallback /> +{contact.phone}{' '}
          </p>
        </div>
        <div className='row justify-content-center pr-lg-4'>
          <Link
            to={`/contacts/edit/${contact._id}`}
            className='btn btn-outline-info mx-1'>
            Edit
          </Link>
          <button onClick={handleDelete} className='btn btn-outline-dark mx-1'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactsSingleInList;
