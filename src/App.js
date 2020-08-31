import React from 'react';
import { Provider } from 'react-redux';
import { contactsStore } from './Redux/ContactsStore';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactsMain from './Components/ContactsMain';
import ContactsHeader from './Components/ContactsHeader';
import ContactsList from './Components/ContactsList';
import ContactsEditor from './Components/ContactsEditor';
import ContactsTotal from './Components/ContactsTotal';
import ContactsNav from './Components/ContactsNav';
import ContactsAdd from './Components/ContactsAdd';

const App = (props) => {
  return (
    <Provider store={contactsStore}>
      <Router>
        <Route path={'/'} component={ContactsHeader} />
        <Route exact path={'/'} component={ContactsMain} />
        <Route
          exact
          path={[
            '/contacts/all',
            '/contacts/count',
            '/contacts/add',
            '/contacts/edit/:id',
            '/contacts/total',
          ]}
          component={ContactsNav}
        />
        <Route exact path='/contacts/all' component={ContactsList} />
        <Route exact path='/contacts/add' component={ContactsAdd} />
        <Route exact path='/contacts/edit/:id' component={ContactsEditor} />
        <Route exact path='/contacts/total' component={ContactsTotal} />
      </Router>
    </Provider>
  );
};

export default App;
