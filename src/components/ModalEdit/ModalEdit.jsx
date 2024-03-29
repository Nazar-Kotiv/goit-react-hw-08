import Modal from "react-modal";
import * as Yup from "yup";
import css from "./ModalEdit.module.css";
import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { updateContacts } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

export default function ModalEdit({
  isOpen,
  closeModalEdit,
  contactId,
  initialValueNumber,
  initialValueName,
}) {
  const ValidEditionSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Too Short Name!")
      .max(35, "Too Long Name!")
      .required("Required"),
    number: Yup.string()
      .min(1, "Too Short Number!")
      .max(20, "Too Long Number!")
      .required("Required"),
  });

  const contactEditNotify = () => toast.success("You edit contact");

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
    contactEditNotify();
    closeModalEdit();
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
      onRequestClose={closeModalEdit}
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
        validationSchema={ValidEditionSchema}
      >
        <Form className={css.form} autoComplete="off">
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage
            name="name"
            component="div"
            className={css.errorMessage}
          />
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={css.errorMessage}
          />
          <button className={css.button} type="submit">
            Save Edit
          </button>
        </Form>
      </Formik>
    </Modal>
  );
}
