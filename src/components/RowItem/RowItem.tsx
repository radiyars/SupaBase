import { ChangeEvent, useEffect, useState } from "react";
import styles from "./RowItem.module.scss";
import supabase from "../../config/supabaseClient";
import { tabelList } from "../../App";
import { TableIitem } from "../../redux/tableSlice";

type RowItemProps = {
  //   itemAddress;
  tableItem: TableIitem;
  tableIxdex: number;
};

const RowItem: React.FC<RowItemProps> = ({ tableItem, tableIxdex }) => {
  const [editMode, setEditMode] = useState(false);
  const [itemValueNew, setItemValueNew] = useState("");

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setEditMode(false);
    if (tableItem) {
      // patchNameApi(id, e.target.value);
    }
    console.log("itemKey:", [tableItem.key]);

    const { data, error } = await supabase
      .from(tabelList[tableIxdex])
      .update({ [tableItem.key]: e.target.value })
      .eq("id", tableItem.id);

    if (error) {
    }

    if (data) {
    }
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
