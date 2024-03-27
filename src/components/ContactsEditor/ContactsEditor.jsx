import { useDispatch } from "react-redux";
import { updateContacts } from "../../redux/contacts/contactsOps";
import { useState } from "react";
import css from "./ContactsEditor.module.css";

export default function TaskEditor({ contact }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactId = form.elements.text.value;
    if (contactId !== "") {
      dispatch(updateContacts(contactId, contact.id));
      form.reset();
      return;
    }
    alert("Contact cannot be empty. Enter some text!");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Update
      </button>
    </form>
  );
}

// export default function ContactsEditor({ contactId, initialValue, onClose }) {
//   const [text, setText] = useState(initialValue);
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       updateContacts({
//         id: contactId,
//         text,
//       })
//     )
//       .unwrap()
//       .then(() => onClose());
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button type="submit">Save</button>
//     </form>
//   );
// }
