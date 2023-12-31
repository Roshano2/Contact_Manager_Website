import React, {useState, useEffect} from "react"; //useState - React Hook
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []); //useState is used here to set current states and update states

    const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, { id: uuid(), ...contact}]);
    };
    
    const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });
      
      setContacts(newContactList);
    }
    


    useEffect( ()=> {
      const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) setContacts(retriveContacts);
    }, []);
 
    useEffect( ()=> {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    }, [contacts]);

  return (
  
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={ <ContactList contacts={contacts} getContactId = {removeContactHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/> {/* we can directly pass props */}
        </Routes>
      </Router>
    
      {/* <AddContact addContactHandler = {addContactHandler}/>
      //<ContactList contacts={contacts} getContactId = {removeContactHandler} />
         */}

    </div>

    
  );
}

export default App;
