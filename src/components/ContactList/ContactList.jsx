import React from 'react';
import { useMemo, useState } from 'react';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../Redux/contactsApi';
import { List, Item, Button } from "./ContactList.styled";
import { Filter } from '../Filter/Filter';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [filter, setFilter] = useState('');
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts = useMemo(() => {
    return (
      data?.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, data]);

  const contactList = filter.length ? filteredContacts : data;

  return (
    <>
      <Filter value={filter} onFilter={setFilter} />
      <List>
        {contactList &&
          contactList?.map(({ id, name, number }) => (
            <Item key={id}>
              {name}: {number}
              <Button onClick={() => deleteContact(id)}>Delete</Button>
            </Item>
          ))}
      </List>
    </>
  );
};
export default ContactList;