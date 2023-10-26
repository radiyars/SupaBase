import { useState } from "react";
import { tabelList } from "../../App";
import supabase from "../../config/supabaseClient";
import { TablesT, Tables } from "../../types/types";
import styles from "./SidebarItem.module.scss";

type SidebarItemProps = {
  tableIndex: number;
  setTable: (data: Tables<TablesT>) => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ tableIndex, setTable }) => {
  const table = tabelList[tableIndex];

  const [fetchError, setFetchError] = useState<string | null>(null);

  const fetchTable = async () => {
    console.log(table);

    const { data, error } = await supabase.from(table).select();
    if (data) {
      setTable(data);
      console.log(data);
      setFetchError(null);
    }

    if (error) {
      setFetchError("could not fetch the table");
      console.log(error);
    }
  };

  return (
    <div className={styles.root} onClick={fetchTable}>
      {table}
    </div>
  );
};

export default SidebarItem;
