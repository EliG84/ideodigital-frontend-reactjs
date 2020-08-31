import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Api from '../Services/ApiService';
import {
  setLoading,
  setModal,
  setMsgFromServer,
  loadContacts,
} from '../Redux/ContactsStore';
import ContactsModal from './ContactsModal';

const ContactsEditor = (props) => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state);

  const [_id, setId] = useState('');
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setModal(true));
    async function loadSingle() {
      const data = await Api.getSingleContact(props.match.params.id);
      if (data.error) {
        dispatch(setMsgFromServer(data));
        dispatch(setLoading(false));
      } else {
        setId(data.contact._id);
        setFirst(data.contact.firstName);
        setLast(data.contact.lastName);
        setEmail(data.contact.email);
        setPhone(data.contact.phone);
        dispatch(setModal(false));
        dispatch(setLoading(false));
      }
    }
    loadSingle();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setModal(true));
    let saveContact = {
      _id,
      firstName,
      lastName,
      email,
      phone: phone.startsWith(0)
        ? '972'.concat(phone.substr(1))
        : phone.startsWith('972')
        ? phone
        : '972'.concat(phone),
    };
    const data = await Api.updateContact(saveContact);
    if (data.error) {
      dispatch(setMsgFromServer(data));
      dispatch(setLoading(false));
    } else {
      dispatch(loadContacts(data));
      dispatch(
        setMsgFromServer({ error: false, message: 'Contact Was Saved!' })
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
              <div className='row justify-content-around'>
                <button type='submit' className='btn btn-outline-dark'>
                  Save
                </button>
                <Link to={'/contacts/all'} className='btn btn-outline-warning'>
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsEditor;
