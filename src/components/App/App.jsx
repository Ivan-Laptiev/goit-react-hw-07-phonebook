import ContactForm from "../ContactForm/ContactForm";
import ContactList from '../ContactList/ContactList';
import { Container } from "./App.styled";

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
}