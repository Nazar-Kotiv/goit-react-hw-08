import { selectContacts } from "../contacts/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.values;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
