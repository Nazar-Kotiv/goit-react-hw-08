import toast from "react-hot-toast";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contactAddNotify = () => toast.success(`You Add new contact`);

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    contactAddNotify();
    actions.resetForm();
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.formContainer}>
        <h3>Create a new contact</h3>
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={styles.inputField}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={styles.errorMessage}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            placeholder="Number"
            className={styles.inputField}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.errorMessage}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
