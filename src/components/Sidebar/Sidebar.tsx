import { Tables, TablesList, TablesT } from "../../types/types";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  tables: TablesList;
  setTable: (data: Tables<TablesT>) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ tables, setTable }) => {
  return (
    <div className={styles.root}>
      <h2>Список таблиц </h2>
      {tables &&
        tables.map((table, index) => (
          <SidebarItem key={index} tableIndex={index} setTable={setTable} />
        ))}
    </div>
  );
};

export default Sidebar;
