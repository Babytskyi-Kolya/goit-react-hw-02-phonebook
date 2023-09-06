import React from 'react';
import { FormContact } from './form/form'; 
import { Filter } from './filter/filter';
import { ListContacts } from './contacts/contacts';
import {Div, H2} from './App.Styled';

// const localStorageKey = 'contacts';

const initialValues = [    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];

class App extends React.Component{
  state = {
    contacts: initialValues,
    filter: "",
  }


  componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts : parsedContacts});
    }
    

  }


  componentDidUpdate (prevProps, prevState) {
      const prevContacts = prevState.contacts;
      const nevContacts = this.state.contacts;

      if (prevContacts !== nevContacts) {
        localStorage.setItem('contacts', JSON.stringify(nevContacts))
      }

   
  }


  addContactUser = (nevUser) => {
    const findedContact = this.state.contacts.find(contact =>
         contact.name.toLowerCase().includes(nevUser.name.toLowerCase())
       );
   
       if (findedContact) {
         alert(`${findedContact.name} is already in contacts`);
         return;
       } else {
           this.setState(prevState => {
         return{
           contacts: [nevUser, ...prevState.contacts]
         }  
       })
       }
     
     }

  changeFilter = (newFilter) => {
     this.setState({
      filter: newFilter,
     })
  }

  handleDelete = (contactId) =>{
     this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
     })
  }
  render() {
     const { contacts, filter } = this.state;

     const visibleContactItems = contacts.filter(contact => contact.name.toLowerCase()
     .includes(filter.toLowerCase()))

    return(
      <Div>
        <H2>Phone Book</H2>
      <FormContact  onAdd={this.addContactUser}/>
      

      <H2>Contacts</H2>

      <Filter 
         value={filter}
         onChange={this.changeFilter}
      />


      {contacts.length === 0 ? (<p>Your contact list is empty</p>
      ) : (
        <ListContacts
        contacts={visibleContactItems}
        onDelete={this.handleDelete}
        />
      )}
      </Div>
    )
  }

}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
      
//     </div>
//   );
// };


// nameId = nanoid();

//   handleChange = evt => {
//     this.setState({ name: evt.target.value });
//   };
//   addContact = evt => {
//     evt.preventDefault();

//     const contact = {
//       id: this.nameId,
//       name: this.state.name
//     }
//     this.setState(prevState => {
//       return{
//         contacts: [ contact, ...prevState.contacts],
//       }
//     })

//     this.setState({name: ''})
//   }
  

      