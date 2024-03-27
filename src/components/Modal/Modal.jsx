import toast from "react-hot-toast";
import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { useDispatch } from "react-redux";
Modal.setAppElement("#root");

export default function ModalWindow({ isOpen, contact, closeModal }) {
  const dispatch = useDispatch();
  const contactDeliteNotify = () => toast.error(`You delite contact`);
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    contactDeliteNotify();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      //   portalClassName={css.portal}
      //   overlayClassName={css.overlay}
      //   className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <p>You wont delite this number?</p>
        <button onClick={handleDelete}> YES </button>
        <button onClick={closeModal}> NO </button>
      </div>
    </Modal>
  );
}
