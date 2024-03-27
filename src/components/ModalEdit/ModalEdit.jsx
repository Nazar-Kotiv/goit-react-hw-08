import Modal from "react-modal";
import { useDispatch } from "react-redux";
// import css from "./Modal.module.css";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { updateContacts } from "../../redux/contacts/contactsOps";

Modal.setAppElement("#root");

export default function ModalEdit({
  isOpen,
  contact,
  closeModal,
  contactId,
  initialValueNumber,
  initialValueName,
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState(initialValueName);
  const [number, setNumber] = useState(initialValueNumber);

  const handleSubmit = (values) => {
    dispatch(
      updateContacts({
        name: values.name,
        number: values.number,
        id: contactId,
      })
    );
  };

  useEffect(() => {
    setName(initialValueName);
  }, [initialValueName]);

  useEffect(() => {
    setNumber(initialValueNumber);
  }, [initialValueNumber]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal Edit"
      portalClassName={css.portal}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
    >
      <Formik
        initialValues={{
          name,
          number,
        }}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Field type="text" name="name" />
          <Field type="text" name="number" />
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </Modal>
  );
}
