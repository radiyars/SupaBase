import { ChangeEvent, useEffect, useState } from "react";
import { tabelList } from "../../App";
import supabase from "../../config/supabaseClient";
import { TableIitem } from "../../types/types";
import { getRelationTableInfo } from "../../utils/getRelationTableInfo";
import styles from "./RowItemRelation.module.scss";

type RowItemRelationProps = {
  tableItem: TableIitem;
  tableIxdex: number;
};

const RowItemRelation: React.FC<RowItemRelationProps> = ({
  tableItem,
  tableIxdex,
}) => {
  const [itemValueNew, setItemValueNew] = useState("");
  const [valuesColumn, setValuesColumn] = useState<string[] | null>(null);

  const RelationTableInfo = getRelationTableInfo(tableItem.key);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const updateItem = async () => {
      const { data, error } = await supabase
        .from(tabelList[tableIxdex])
        .update({ [tableItem.key]: e.target.value })
        .eq("id", tableItem.id)
        .select();

      if (error) {
      }

      if (data) {
        setItemValueNew(data[0][tableItem.key]);
        // setItemValueNew(e.target.value);
      }
    };
    updateItem();
  };

  useEffect(() => {
    setItemValueNew(String(tableItem.value));
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from(`${RelationTableInfo.table}`)
        .select(`${RelationTableInfo.column}`)
        .order("id");
      if (error) {
        //   setFetchError("could not fetch the cars");
        //   serCars(null);
        console.log(error);
      }
      if (data) {
        setValuesColumn(data.map((item) => String(Object.values(item)[0])));
      }
    };

    fetch();
  }, []);

  return (
    <div className={styles.root}>
      <select value={itemValueNew} onChange={handleChange}>
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
