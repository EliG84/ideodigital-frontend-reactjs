import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Api from '../Services/ApiService';
import { setLoading, setModal, setTotal } from '../Redux/ContactsStore';

import '../Style/style.css';
import ContactsModal from './ContactsModal';

const ContactsTotal = () => {
  const dispatch = useDispatch();
  const { total, openModal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setModal(true));
    async function getTotal() {
      const data = await Api.getTotalContacts();
      dispatch(setTotal(data.total));
      dispatch(setModal(false));
      dispatch(setLoading(false));
    }
    getTotal();
  }, []);

  return (
    <div className={openModal ? 'backdrop' : 'jumbotron text-center my-2'}>
      {openModal ? (
        <ContactsModal />
      ) : (
        <p className='display-4 font-weight-bold'>{total} Contacts</p>
      )}
    </div>
  );
};

export default ContactsTotal;
