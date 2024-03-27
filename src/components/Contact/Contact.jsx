import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/contactsOps";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
import ContactsEditor from "../ContactsEditor/ContactsEditor";

export default function Contact({ contact }) {
  const [isEditing, setIsEditing] = useState(false);
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  // const toggleModal = () => {
  //   setModalOpen(!modalOpen);
  // };
  function closeModal() {
    setModalOpen(false);
  }

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
      <ContactsEditor contact={contact} />
      <button onClick={openModal}>Delete</button>
      {modalOpen && (
        <ModalWindow
          isOpen={modalOpen}
          contact={contact}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
