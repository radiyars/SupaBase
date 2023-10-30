import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RowItem from "../RowItem/RowItem";
import styles from "./Main.module.scss";
import RowItemRelation from "../RowItemRelation/RowItemRelation";

type MainProps = {};

const Main: React.FC<MainProps> = ({}) => {
  const { table } = useSelector((state: RootState) => state.table);

  return (
    <div className={styles.root}>
      <h2>Данные таблицы</h2>
      {table && (
        <>
          {/* Строка с ключами столбцов */}
          <div className={styles.root__names}>
            {Object.keys(table[0]).map((key, index) => (
              <div key={index} className={styles.root__name}>
                {key}
              </div>
            ))}
          </div>
          {/* Строки с данными таблицы */}
          {table.map((row) => {
            const id = row.id;
            return (
              <div key={id} className={styles.root__row}>
                {Object.entries(row).map((item, index) => {
                  if (item[0].includes("_")) {
                    // если есть нижнее подчеркивание значит это связывающая ссылка :)
                    return (
                      <RowItemRelation
                        key={index}
                        tableItem={{ key: item[0], value: item[1], id }}
                      />
                    );
                  } else {
                    // если нет нижнего подчеркивания - значит это стандартные данные :)
                    return <RowItem key={index} tableItem={{ key: item[0], value: item[1], id }} />;
                  }
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Main;
