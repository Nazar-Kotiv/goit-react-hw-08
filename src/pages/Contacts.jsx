import PageTitle from "../components/PageTitle/PageTitle";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading, selectError } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Phonebook</PageTitle>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      <div>{isLoading && <Loader />}</div>
      <ContactList />
    </>
  );
}
