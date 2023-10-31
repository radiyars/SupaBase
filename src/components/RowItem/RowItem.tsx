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

  useEffect(() => {
    setChangedItem(String(tableItem.value));
  }, [tableItem.value]);

  const dispatchChangedItem = (item: string) => {
    if (item) {
      dispatch(
        updateItem({
          currentTable,
          key: tableItem.key,
          value: changedItem,
          id: String(tableItem.id),
        })
      );
      setEditMode(false);
    }
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchChangedItem(changedItem);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatchChangedItem(changedItem);
    }
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
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </div>
  );
};

export default RowItem;
