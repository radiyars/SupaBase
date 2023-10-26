import { TablesT, Tables } from "../../types/types";
import styles from "./Main.module.scss";

type MainProps = {
  items: Tables<TablesT>;
};

const Main: React.FC<MainProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      <h2>Данные таблицы</h2>
      {items && (
        <>
          <div className={styles.root__names}>
            {Object.keys(items[0]).map((key, index) => (
              <div key={index} className={styles.root__name}>
                {key}
              </div>
            ))}
          </div>
          {items.map((obj) => (
            <div key={obj.id} className={styles.root__row}>
              {Object.values(obj).map((item, index) => (
                <div key={index} className={styles.root__item}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Main;
