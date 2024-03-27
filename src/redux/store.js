import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filtersSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
