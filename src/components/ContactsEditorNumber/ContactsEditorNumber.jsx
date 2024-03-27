import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

export default function ContactsEditorNumber({ initialValueNumber }) {
  // const dispatch = useDispatch();
  const [number, setNumber] = useState(initialValueNumber);

  useEffect(() => {
    setNumber(initialValueNumber);
  }, [initialValueNumber]);
  return (
    <Formik
      initialValues={{
        number,
      }}
      // onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Field type="text" name="number" />
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}
