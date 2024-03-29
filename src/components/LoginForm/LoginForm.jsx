import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [submittedWithError, setSubmittedWithError] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  useEffect(() => {
    if (error && submittedWithError) {
      toast.error(`Ops, somthing wrong, Try Again!`);
    }
  }, [error, submittedWithError]);

  const handleFormSubmit = (values, actions) => {
    setSubmittedWithError(true);
    handleSubmit(values, actions);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleFormSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
