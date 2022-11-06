import { List, Item, Button } from "./ContactList.styled";
import { useDispatch, useSelector } from "react-redux";
import {deleteContact} from '../../Redux/contactSlice'

const ContactList = () => {

   
    const contacts = useSelector(state => state.contacts.items);    
    const filter = useSelector(state => state.filter.value);    

    const getFilteredContacts = () => {                                               
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
      };
      const filteredContacts = getFilteredContacts();

    const dispatch = useDispatch();

    const delContact = (id) => {
        dispatch(deleteContact(id));
      };

    return ( 
        <List>
            {filteredContacts.map(val => (<Item key={val.id}>{val.name}: {val.number}
                <Button onClick={()=> delContact(val.id) }>Delete</Button>
            </Item>))}
        </List>
    )

};

export default ContactList;