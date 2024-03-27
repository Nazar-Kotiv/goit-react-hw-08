import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/contactsOps";
import ModalWindow from "../Modal/Modal";
import { useState } from "react";
// import ContactsEditorName from "../ContactsEditorName/ContactsEditorName";
// import ContactsEditorNumber from "../ContactsEditorNumber/ContactsEditorNumber";

export default function Contact({ contact }) {
  // const [isEditingName, setIsEditingName] = useState(false);
  // const [isEditingNumber, setIsEditingNumber] = useState(false);
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

          {/* {isEditingName ? (
            <ContactsEditorName
              initialValueName={contact.name}
              initialValueNumber={contact.number}
              contactId={contact.id}
            />
          ) : (
            <p
              className={css.text}
              onClick={() => {
                setIsEditingName(true);
              }}
            >
              {contact.name}
            </p>
          )} */}
          <p className={css.text}> {contact.name}</p>
        </div>
        <div className={css.iconContainer}>
          <FaPhone />
          {/* {isEditingNumber ? (
            <ContactsEditorNumber
              initialValueNumber={contact.number}
              contactId={contact.id}
            />
          ) : (
            <p
              className={css.text}
              onClick={() => {
                setIsEditingNumber(true);
              }}
            >
              {contact.number}
            </p> */}
          <p className={css.text}> {contact.number}</p>
          {/* )} */}
        </div>
      </div>
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
