import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactList from "../components/ContactList/ContactList";
// import TaskEditor from "../components/TaskEditor/TaskEditor";
import { fetchContacts } from "../redux/contacts/contactsOps";
import { selectLoading } from "../redux/contacts/selector";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your Contacts</PageTitle>
      {/* <TaskEditor /> */}
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}

// import ContactList from "../ContactList/ContactList";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactForm from "../ContactForm/ContactForm";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

// import { selectLoading, selectError } from "../../redux/contactsSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";

// import "./App.css";

// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       {error && <ErrorMessage />}
//       {loading && <Loader />}
//       <ContactList />
//     </div>
//   );
// }
