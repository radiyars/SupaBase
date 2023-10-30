import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./SidebarItem.module.scss";
import { fetchTable } from "../../redux/asyncActions";

type SidebarItemProps = {
  tableIndex: number;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ tableIndex }) => {
  const { tabelList, currentTable } = useSelector((state: RootState) => state.table);
  const dispatch = useAppDispatch();

  const handleOnClick = async () => {
    dispatch(fetchTable(tabelList[tableIndex]));
  };

  return (
    <div
      className={`${styles.root} ${
        tabelList[tableIndex] === currentTable ? styles.root__active : ""
      }`}
      onClick={handleOnClick}
    >
      {tabelList[tableIndex]}
    </div>
  );
};

export default SidebarItem;
