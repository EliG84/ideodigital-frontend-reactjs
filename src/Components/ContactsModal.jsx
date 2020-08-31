import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../Style/style.css';
import ContactsCirleLoader from './ContactsCircleLoader';
import { setModal, setMsgFromServer } from '../Redux/ContactsStore';

const ContactsModal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { msgFromServer, loading } = useSelector((state) => state);

  const handleClick = () => {
    if (msgFromServer.error) dispatch(setModal(false));
    else {
      dispatch(setMsgFromServer({}));
      dispatch(setModal(false));
      history.push('/contacts/all');
    }
  };

  return (
    <div className={loading ? 'modalStyleWhileLoading' : 'modalStyle'}>
      {loading && <ContactsCirleLoader />}
      {!loading && msgFromServer && (
        <div>
          <div className='jumbotron text-center'>
            <h4 className='font-weight-bold'>{msgFromServer.message}</h4>
          </div>
          <div className='row justify-content-center'>
            <button onClick={handleClick} className='btn btn-outline-dark'>
              {msgFromServer.error ? 'Back' : 'Ok'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactsModal;
