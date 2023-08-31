import React from 'react';
import { FormContact } from './form/form'; 
import { Filter } from './filter/filter';
import { ListContacts } from './contacts/contacts';
import {Div, H2} from './App.Styled';
// import toast, { Toaster } from 'react-hot-toast';


class App extends React.Component{
  state = {
    contacts: [],
    name: '',
    number: '', 
    filter: ""
  }

  // notify = () => toast.error('This contact is already registered');
 
  addContactUser = (nevUser) => {
    this.setState(prevState => {
      return{
        contacts: [nevUser, ...prevState.contacts]
      }  
    })
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
  

      