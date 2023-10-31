import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type LoadingProps = {};

const Loader: React.FC<LoadingProps> = ({}) => {
  const { isLoading } = useSelector((state: RootState) => state.table);

  return (
    <div className={styles.root}>
      <ThreeDots height="280" width="80" radius="9" color="#00BFFF" visible={isLoading} />
    </div>
  );
};

export default Loader;
