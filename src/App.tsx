import { useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { Tables, TablesT } from "./types/types";

export const tabelList = ["cars", "dishes", "contacts"] as const;

function App() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [tableIxdex, setTableIndex] = useState<number>(0);
  const [table, setTable] = useState<Tables<TablesT>>(null);

  //   useEffect(() => {
  //     const fetchCars = async () => {
  //       const { data, error } = await supabase.from("cars").select();

  //       if (error) {
  //         setFetchError("could not fetch the cars");
  //         serCars(null);
  //         console.log(error);
  //       }

  //       if (data) {
  //         //@ts-ignore
  //         serCars(data);
  //         console.log(data);

  //         setFetchError(null);
  //       }
  //     };

  //     fetchCars();
  //   }, []);

  return (
    <div className="page">
      {fetchError && <p>{fetchError}</p>}
      <Sidebar tables={tabelList} setTable={setTable} />
      <Main items={table} />
    </div>
  );
}

export default App;
