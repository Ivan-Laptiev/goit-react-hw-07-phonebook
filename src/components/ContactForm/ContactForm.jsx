import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, ErrorMessage } from "formik";
import { Label, Button, InputName } from "./ContactForm.styled";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../Redux/contactsApi';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();

  const id = nanoid(7);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const values = { name, number, id };
    setName('');
    setNumber('');

    const savedName = data && data.find(Cont => Cont.name === values.name);
    if (savedName !== undefined) {
      alert(`${values.name} is already in contacts!`);
      return data;
    } else {
      return addContact(values);
    }
  };

  return (
    <Formik >
    <Form  onSubmit={e => handleSubmit(e)}>
      <Label  htmlFor={id}>
        Name
        <InputName
          
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
           Charles de Batz de Castelmore d'Artagnan"
          required
        />
         <ErrorMessage name="name" />
      </Label>

      <Label >
        Number
        <InputName
          
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
         <ErrorMessage name="name" />
      </Label>

      <Button  type="submit">
        Add contact
      </Button>
    </Form>
    </Formik>
  );
};

export default ContactForm;