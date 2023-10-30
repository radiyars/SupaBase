import { useEffect } from "react";
import { useSelector } from "react-redux";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchTable } from "./redux/asyncActions";
import { RootState, useAppDispatch } from "./redux/store";

function App() {
  const { currentTable, error } = useSelector((state: RootState) => state.table);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTable(currentTable));
  }, []);

  return (
    <>
      <div className="page">
        <Sidebar />
        <Main />
      </div>
      {error && <div className="error">{error}</div>}
    </>
  );
}

export default App;
