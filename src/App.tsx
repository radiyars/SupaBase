import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import supabase from "./config/supabaseClient";
import { RootState } from "./redux/store";
import { setTable } from "./redux/tableSlice";

function App() {
  const { currentTableName } = useSelector((state: RootState) => state.table);
  const dispatch = useDispatch();

  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase.from(currentTableName).select();

      if (error) {
        setFetchError("could not fetch the cars");
        dispatch(setTable(null));
      }

      if (data) {
        // serCars(data);
        dispatch(setTable(data));
        setFetchError(null);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="page">
      {fetchError && <p>{fetchError}</p>}
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
