import { createStore } from 'redux';

const initialState = {
  contacts: [],
  total: 0,
  msgFromServer: {},
  loading: false,
  openModal: false,
  divContentInMain: [
    { text: 'My Contacts', url: '/contacts/all' },
    { text: 'Add Contact', url: '/contacts/add' },
    { text: 'Show Total', url: '/contacts/total' },
  ],
};

const LOAD_CONTACTS = 'load_contacts';
const SET_TOTAL = 'set_total';
const MSG_FROM_SERVER = 'msg_from_server';
const SET_LOADING = 'set_loading';
const OPEN_MODAL = 'open_modal';

export function loadContacts(data) {
  return {
    type: LOAD_CONTACTS,
    data,
  };
}

export function setTotal(total) {
  return {
    type: SET_TOTAL,
    total,
  };
}

export function setMsgFromServer(msg) {
  return {
    type: MSG_FROM_SERVER,
    msg,
  };
}

export function setLoading(bool) {
  return {
    type: SET_LOADING,
    isLoading: bool,
  };
}

export function setModal(bool) {
  return {
    type: OPEN_MODAL,
    open: bool,
  };
}

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return {
        ...state,
        contacts: [...action.data.contacts],
        total: action.data.total,
      };
    case SET_TOTAL:
      return { ...state, total: action.total };
    case MSG_FROM_SERVER:
      return { ...state, msgFromServer: { ...action.msg } };
    case SET_LOADING:
      return { ...state, loading: action.isLoading };
    case OPEN_MODAL:
      return { ...state, openModal: action.open };
    default:
      return state;
  }
};

export const contactsStore = createStore(contactsReducer);
