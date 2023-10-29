import { useDispatch, useSelector } from "react-redux";
import supabase from "../../config/supabaseClient";
import { RootState } from "../../redux/store";
import { setCurrentTableName, setTable } from "../../redux/tableSlice";
import styles from "./SidebarItem.module.scss";

type SidebarItemProps = {
  tableIndex: number;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ tableIndex }) => {
  const { tabelList, currentTableName } = useSelector(
    (state: RootState) => state.table
  );
  const dispatch = useDispatch();

  const fetchTable = async () => {
    dispatch(setCurrentTableName(tableIndex));

    const { data, error } = await supabase
      .from(tabelList[tableIndex])
      .select()
      .order("id");

    if (data) {
      dispatch(setTable(data));
      //   setFetchError(null);
    }

    if (error) {
      //   setFetchError("could not fetch the table");
    }
  };
  let a = tabelList[tableIndex] === currentTableName ? styles.root__active : "";
  console.log(a);

  return (
    <div
      className={`${styles.root} ${
        tabelList[tableIndex] === currentTableName ? styles.root__active : ""
      }`}
      onClick={fetchTable}
    >
      {tabelList[tableIndex]}
    </div>
  );
};

export default SidebarItem;
