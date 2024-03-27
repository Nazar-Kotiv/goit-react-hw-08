import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/contacts/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contacts/selector";

export default function SearchBox() {
  const dispatch = useDispatch();

  const serchForName = useSelector(selectFilter);

  const handleselectNameFilter = (evt) => {
    const newText = evt.target.value;
    dispatch(changeFilter(newText));
  };

  return (
    <div className={css.containerInput}>
      <p className={css.textInput}> Find contact by name</p>
      <input
        className={css.findInput}
        type="text"
        value={serchForName}
        onChange={handleselectNameFilter}
        placeholder="Find contact by name"
      />
    </div>
  );
}
