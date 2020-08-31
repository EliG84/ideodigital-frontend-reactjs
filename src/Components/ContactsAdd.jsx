import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Api from '../Services/ApiService';
import {
  setLoading,
  setModal,
  setMsgFromServer,
  loadContacts,
} from '../Redux/ContactsStore';
import ContactsModal from './ContactsModal';

import '../Style/style.css';

const ContactsAdd = (props) => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state);

  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setModal(true));
    let newContact = {
      firstName,
      lastName,
      email,
      phone: phone.startsWith(0)
        ? '972'.concat(phone.substr(1))
        : phone.startsWith('972')
        ? phone
        : '972'.concat(phone),
    };
    const data = await Api.addContact(newContact);
    if (data.error) {
      dispatch(setMsgFromServer(data));
      dispatch(setLoading(false));
    } else {
      dispatch(loadContacts(data));
      dispatch(
        setMsgFromServer({ error: false, message: 'New Contact was added!' })
      );
      dispatch(setLoading(false));
    }
  };

  return (
    <div className={openModal ? 'backdrop' : ''}>
      {openModal && <ContactsModal />}
      {!openModal && (
        <div>
          <div className='jumbotron text-center'>
            <h1>Add A Contact</h1>
          </div>
          <div>
            <form className='container col-md-6' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='fName'>First Name</label>
                <input
                  onChange={(e) => setFirst(e.target.value)}
                  value={firstName}
                  type='text'
                  className='form-control'
                  id='fName'
                  aria-describedby='emailHelp'
                  placeholder='Enter Frist Name'
                  required
                />
                <label htmlFor='lName'>Last Name</label>
                <input
                  onChange={(e) => setLast(e.target.value)}
                  value={lastName}
                  type='text'
                  className='form-control'
                  id='lName'
                  aria-describedby='emailHelp'
                  placeholder='Enter Last Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Enter Last Name'
                  required
                />
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='form-group'>
                <label htmlFor='phone'>Phone Number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type='text'
                  id='phone'
                  name='phone'
                  className='form-control'
                  pattern='[0-9.]+'
                  placeholder='Enter Phone Number'
                  required
                />
              </div>
              <div className='row justify-content-center'>
                <button type='submit' className='btn btn-outline-dark'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsAdd;
