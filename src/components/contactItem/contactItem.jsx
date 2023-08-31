import React from 'react';


const ContactItem = ({ contact: { id, name, number}, onDelete }) => {

    return (
      <li>
      <span>{name} :</span>
      <span>{number}</span>
      <button type='button' onClick={() => onDelete(id)}>Delate contact</button>
      </li>
    )
}

export default ContactItem;