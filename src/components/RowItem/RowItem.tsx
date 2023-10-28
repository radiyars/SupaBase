import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tabelList } from "../../App";
import supabase from "../../config/supabaseClient";
import { setItem } from "../../redux/tableSlice";
import styles from "./RowItem.module.scss";
import { TableIitem } from "../../types/types";

type RowItemProps = {
  tableItem: TableIitem;
  tableIxdex: number;
};

const RowItem: React.FC<RowItemProps> = ({ tableItem, tableIxdex }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [itemValueNew, setItemValueNew] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (tableItem) {
      // patchNameApi(id, e.target.value);
    }

    const updateItem = async () => {
      const { data, error } = await supabase
        .from(tabelList[tableIxdex])
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
        <span className={styles.root__item} onClick={() => setEditMode(true)}>
          {tableItem.value}
        </span>
      )}

      {editMode && (
        <input
          className={styles.root__item}
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
