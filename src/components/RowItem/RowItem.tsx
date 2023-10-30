import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateItem } from "../../redux/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";
import { TableIitem } from "../../types/types";
import styles from "./RowItem.module.scss";

type RowItemProps = {
  tableItem: TableIitem;
};

const RowItem: React.FC<RowItemProps> = ({ tableItem }) => {
  const { currentTable } = useSelector((state: RootState) => state.table);
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);
  const [changedItem, setChangedItem] = useState("");
  //   const [updatedItem, setUpdatedItem] = useState("");

  useEffect(() => {
    setChangedItem(String(tableItem.value));
  }, [tableItem.value]);

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      dispatch(
        updateItem({
          currentTable,
          key: tableItem.key,
          value: e.target.value,
          id: String(tableItem.id),
        })
      );
    }
    setEditMode(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      //   setUpdatedItem(changedItem);
      dispatch(
        updateItem({
          currentTable,
          key: tableItem.key,
          value: changedItem,
          id: String(tableItem.id),
        })
      );
    }

    setEditMode(false);
  };

  return (
    <div className={styles.root}>
      {!editMode && <span onClick={() => setEditMode(true)}>{tableItem.value}</span>}

      {editMode && (
        <input
          type="text"
          onChange={(e) => {
            setChangedItem(e.target.value);
          }}
          value={changedItem}
          onBlur={handleOnBlur}
          //   onKeyDown={(e) => something(e) }
          autoFocus
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default RowItem;
