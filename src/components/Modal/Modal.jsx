import toast from "react-hot-toast";
import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { useDispatch } from "react-redux";
import css from "./Modal.module.css"; // імпортуй стилі з модуля

Modal.setAppElement("#root");

export default function ModalWindow({ isOpen, contact, closeModal }) {
  const dispatch = useDispatch();
  const contactDeleteNotify = () => toast.error(`You deleted the contact`);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    contactDeleteNotify();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      portalClassName={css.portal}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div className={css.modalContent}>
        <p>You want to delete contact {contact.name} ?</p>
        <div className={css.buttonContainer}>
          <button onClick={handleDelete}>YES</button>
          <button onClick={closeModal}>NO</button>
        </div>
      </div>
    </Modal>
  );
}
