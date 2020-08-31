import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Api from '../Services/ApiService';
import { setLoading, setModal, loadContacts } from '../Redux/ContactsStore';
import ContactsSingleInList from './ConstactSingleInList';
import ContactsModal from './ContactsModal';

import '../Style/style.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  let { contacts, openModal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setModal(true));
    async function getContacts() {
      const data = await Api.getAllContacts();
      dispatch(loadContacts({ contacts: data.contacts, total: data.total }));
      dispatch(setModal(false));
      dispatch(setLoading(false));
    }
    getContacts();
  }, []);

  return (
    <div className={openModal ? 'backdrop' : 'container'}>
      {openModal ? (
        <ContactsModal />
      ) : (
        contacts.map((c, i) => <ContactsSingleInList key={i} contact={c} />)
      )}
    </div>
  );
};

export default ContactsList;
