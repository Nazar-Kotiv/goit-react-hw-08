// import { useState } from "react";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

// export default function ModalWindow() {
//   return (
//     <div>
//       <Button color="primary" onClick={toggleModal}>
//         Open Modal
//       </Button>
//       <Modal isOpen={modalOpen} toggle={toggleModal}>
//         <ModalBody>This is the content of the modal</ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggleModal}>
//             Close
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { useDispatch } from "react-redux";
Modal.setAppElement("#root");

export default function ModalWindow({ isOpen, contact, closeModal }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  //   const notify = () => toast("Here is your toast.");
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
