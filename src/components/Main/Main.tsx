import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RowItem from "../RowItem/RowItem";
import styles from "./Main.module.scss";

type MainProps = {
  tableIxdex: number;
};

const Main: React.FC<MainProps> = ({ tableIxdex }) => {
  const { table } = useSelector((state: RootState) => state.table);

  return (
    <div className={styles.root}>
      <h2>Данные таблицы</h2>
      {table && (
        <>
          {/* Строка с названиями столбцов */}
          <div className={styles.root__names}>
            {Object.keys(table[0]).map((key, index) => (
              <div key={index} className={styles.root__name}>
                {key}
              </div>
            ))}
          </div>
          {/* Строки с данными таблицы */}
          {table.map((obj) => {
            const id = obj.id;
            return (
              <div key={obj.id} className={styles.root__row}>
                {Object.entries(obj).map((item, index) => (
                  <RowItem
                    key={index}
                    tableItem={{ key: item[0], value: item[1], id }}
                    tableIxdex={tableIxdex}
                  />
                ))}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Main;
