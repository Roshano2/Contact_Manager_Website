import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    
    // const contacts = [
    //     {
    //         id:"1",
    //         "name": "roshan",
    //         "email": "roshan@gmail.com",
    //     },
    // ];
    const renderContactList = props.contacts.map((contact) => {
        return ( 
            <ContactCard 
            contact = {contact} 
            clickHandler = {deleteContactHandler} 
            key = {contact.id}/>
        )
    });

    
    
    return (
        <div class = "main">

            <h1>Contact List
                <Link to="/add">
                    <button style={{float:"right"}} 
                    className="ui button blue right">Add Contact
                    </button>
                </Link>
            </h1>
            <div className="ui celled list"> {renderContactList}</div>
        </div>
    );
}

export default ContactList;