import { useState } from "react";
import { tabelList } from "../../App";
import supabase from "../../config/supabaseClient";
import styles from "./SidebarItem.module.scss";
import { setTable } from "../../redux/tableSlice";
import { useDispatch } from "react-redux";

type SidebarItemProps = {
  tableIndex: number;
  setTableIndex: (index: number) => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  tableIndex,
  setTableIndex,
}) => {
  const dispatch = useDispatch();

  const table = tabelList[tableIndex];

  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchTable = async () => {
    setTableIndex(tableIndex);

    // console.log(table);

    const { data, error } = await supabase.from(table).select().order("id");
    if (data) {
      //   setTable(data);
      dispatch(setTable(data));
      //   console.log(data);
      setFetchError(null);
    }

    if (error) {
      setFetchError("could not fetch the table");
      //   console.log(error);
    }
  };

  return (
    <div className={styles.root} onClick={fetchTable}>
      {table}
    </div>
  );
};

export default SidebarItem;
