import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SidebarItem from "../SidebarItem/SidebarItem";
import styles from "./Sidebar.module.scss";

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { tabelList } = useSelector((state: RootState) => state.table);

  return (
    <div className={styles.root}>
      <h2>Список таблиц </h2>
      {tabelList.map((item, index) => (
        <SidebarItem key={index} tableIndex={index} />
      ))}
    </div>
  );
};

export default Sidebar;
