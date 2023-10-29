import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../config/supabaseClient";
import { RootState } from "../../redux/store";
import { setItem } from "../../redux/tableSlice";
import { TableIitem } from "../../types/types";
import styles from "./RowItem.module.scss";

type RowItemProps = {
  tableItem: TableIitem;
};

const RowItem: React.FC<RowItemProps> = ({ tableItem }) => {
  const { currentTableName } = useSelector((state: RootState) => state.table);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [itemValueNew, setItemValueNew] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (tableItem) {
      // patchNameApi(id, e.target.value);
    }

    const updateItem = async () => {
      const { data, error } = await supabase
        .from(currentTableName)
        .update({ [tableItem.key]: e.target.value })
        .eq("id", tableItem.id)
        .select();

      if (error) {
      }

      if (data) {
        dispatch(setItem({ ...tableItem, value: e.target.value }));
      }
    };
    updateItem();
    setEditMode(false);
  };

  useEffect(() => {
    setItemValueNew(String(tableItem.value));
  }, [tableItem.value]);

  return (
    <div className={styles.root}>
      {!editMode && (
        <span onClick={() => setEditMode(true)}>{tableItem.value}</span>
      )}

      {editMode && (
        <input
          type="text"
          onChange={(e) => {
            setItemValueNew(e.target.value);
          }}
          value={itemValueNew}
          onBlur={handleChange}
          autoFocus
        />
      )}
    </div>
  );
};

export default RowItem;
