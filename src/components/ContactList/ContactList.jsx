import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

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
