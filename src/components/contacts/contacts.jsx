import React from 'react';
import ContactItem from 'components/contactItem/contactItem';

export const ListContacts = ({contacts, onDelete}) => {

    return(
       <ul>
        {contacts.map(contact => (
         <ContactItem
           key={contact.id}
          contact={contact}
          onDelete={onDelete}
         />
        ))}
       </ul>
    )
}