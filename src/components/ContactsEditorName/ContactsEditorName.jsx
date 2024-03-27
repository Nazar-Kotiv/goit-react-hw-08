import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateContacts } from "../../redux/contacts/contactsOps";

export default function ContactsEditorName({
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
  );
}
