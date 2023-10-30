import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import supabase from "../../config/supabaseClient";
import { RootState, useAppDispatch } from "../../redux/store";
import { TableIitem } from "../../types/types";
import { getRelationTableInfo } from "../../utils/getRelationTableInfo";
import styles from "./RowItemRelation.module.scss";
import { updateItem } from "../../redux/asyncActions";
import { setError } from "../../redux/tableSlice";

type RowItemRelationProps = {
  tableItem: TableIitem;
};

const RowItemRelation: React.FC<RowItemRelationProps> = ({ tableItem }) => {
  const { currentTable } = useSelector((state: RootState) => state.table);
  const dispatch = useAppDispatch();
  const [itemValueNew, setItemValueNew] = useState("");
  const [valuesColumn, setValuesColumn] = useState<string[] | null>(null); // столбец с возможноыми значениями из связанной таблицы

  useEffect(() => {
    setItemValueNew(String(tableItem.value));
  }, [tableItem.value]);

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      updateItem({
        currentTable,
        key: tableItem.key,
        value: e.target.value,
        id: String(tableItem.id),
      })
    );
  };

  const handleOnClick = () => {
    const RelationTableInfo = getRelationTableInfo(tableItem.key);
    // приходится делать запрос здесь, потому что формирую локальный стейт :)
    const fetch = async () => {
      const { data, error } = await supabase
        .from(`${RelationTableInfo.table}`)
        .select(`${RelationTableInfo.column}`)
        .order("id");

      if (error) {
        dispatch(setError(`Fetching error! ${error.message}`));
      }

      if (data) {
        setValuesColumn(data.map((item) => String(Object.values(item)[0])));
      }
    };

    fetch();
  };

  return (
    <div className={styles.root}>
      <select value={itemValueNew} onChange={handleOnChange} onClick={handleOnClick}>
        {!valuesColumn && <option value={itemValueNew}>{itemValueNew}</option>}
        {valuesColumn &&
          valuesColumn.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default RowItemRelation;
