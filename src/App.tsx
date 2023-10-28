import { useEffect, useState } from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { User, Users } from "./types/types";
import supabase from "./config/supabaseClient";

export const tabelList = [
  "cars",
  "dishes",
  "contacts",
  "user",
  "passport",
] as const;

function App() {
  const [fetchError, setFetchError] = useState<string | null>(null);

  const [tableIxdex, setTableIndex] = useState<number>(0);
  //   const [table, setTable] = useState<Table>(null);

  const [table2, setTable2] = useState<any>(null);

  //   useEffect(() => {
  //     let a: User = {
  //       id: 1,
  //       lastName: "string",
  //       firstName: "string",
  //       passport_id: 2,
  //       relationTable: "passport",
  //       relationColumn: "id",
  //     };
  //     const fetch = async () => {
  //       const { data, error } = await supabase
  //         .from(`${a.relationTable}`)
  //         .select(`${a.relationColumn}`);

  //       if (error) {
  //         //   setFetchError("could not fetch the cars");
  //         //   serCars(null);
  //         console.log(error);
  //       }

  //       if (data) {
  //         console.log(data);
  //         setTable2(data);
  //       }
  //     };

  //     fetch();

  //     console.log(table2);
  //   }, []);

  //!
  // const [tableName, setTableName] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     const { data, error } = await supabase.from("cars").select();

  //     if (error) {
  //       setFetchError("could not fetch the cars");
  //       serCars(null);
  //       console.log(error);
  //     }

  //     if (data) {
  //       //@ts-ignore
  //       serCars(data);
  //       console.log(data);

  //       setFetchError(null);
  //     }
  //   };

  //   fetchCars();
  // }, []);

  return (
    <div className="page">
      {fetchError && <p>{fetchError}</p>}
      <Sidebar
        tables={tabelList}
        // setTable={setTable}
        setTableIndex={setTableIndex}
      />
      <Main tableIxdex={tableIxdex} />
    </div>
  );
}

export default App;
