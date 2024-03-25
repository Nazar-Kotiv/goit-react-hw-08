import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
