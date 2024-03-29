import toast from "react-hot-toast";
import Modal from "react-modal";
import css from "./ModalDelete.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

export default function ModalDelete({ isOpen, contact, closeModal }) {
  const dispatch = useDispatch();
  const contactDeleteNotify = () =>
    toast.error(`You deleted the contact ${contact.name}`);

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
        <p>You wont to delete contact {contact.name} ?</p>
        <div className={css.buttonContainer}>
          <button className={css.button} onClick={handleDelete}>
            YES
          </button>
          <button className={css.button} onClick={closeModal}>
            NO
          </button>
        </div>
      </div>
    </Modal>
  );
}
