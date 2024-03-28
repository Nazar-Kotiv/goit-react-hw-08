import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/contactsOps";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useState } from "react";

export default function Contact({ contact }) {
  // const [isEditingName, setIsEditingName] = useState(false);
  // const [isEditingNumber, setIsEditingNumber] = useState(false);
  // const dispatch = useDispatch();
  // const handleDelete = () => dispatch(deleteContact(contact.id));
  const [modalOpen, setModalOpen] = useState(false);

  const [modalEdit, setModalEdit] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalEdit = () => {
    setModalEdit(true);
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };
  return (
    <div className={css.listItem}>
      <div className={css.positionContainer}>
        <div className={css.iconContainer}>
          <FaUser />

          <p className={css.text}> {contact.name}</p>
        </div>
        <div className={css.iconContainer}>
          <FaPhone />

          <p className={css.text}> {contact.number}</p>
        </div>
      </div>
      <div className={css.positionButton}>
        <button className={css.button} onClick={openModal}>
          Delete
        </button>
        {modalOpen && (
          <ModalDelete
            isOpen={modalOpen}
            contact={contact}
            closeModal={closeModal}
          />
        )}
        <button className={css.button} onClick={openModalEdit}>
          Edit
        </button>
        {modalEdit && (
          <ModalEdit
            isOpen={modalEdit}
            contact={contact}
            initialValueNumber={contact.number}
            initialValueName={contact.name}
            contactId={contact.id}
            closeModalEdit={closeModalEdit}
          />
        )}
      </div>
    </div>
  );
}
