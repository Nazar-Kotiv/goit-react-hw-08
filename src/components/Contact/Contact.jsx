import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.listItem}>
      <div className={css.positionContainer}>
        <div className={css.iconContainer}>
          <FaUser />
          <span className={css.text}>{contact.name}</span>
        </div>
        <div className={css.iconContainer}>
          <FaPhone />
          <span className={css.text}>{contact.number}</span>
        </div>
      </div>

      <button onClick={handleDelete}>Delete </button>
    </div>
  );
}
