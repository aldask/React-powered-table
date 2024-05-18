import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

function DataFetch() {
  const [data, setData] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  const [dataLoadError, setDataLoadError] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [elements, setElements] = useState(5);

  useEffect(() => {
    setDataLoad(true);
    fetch(
      `https://hiring-api.simbuka.workers.dev/?page=${pageNo}&size=${elements}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network problem. Press F5 to try again");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setDataLoad(false);
      })
      .catch((error) => {
        setDataLoadError(error);
        setDataLoad(false);
      });
  }, [pageNo, elements]);

  if (dataLoad) {
    return <div className="text-center text-green-500">Loading</div>;
  }

  if (dataLoadError) {
    return (
      <div className="text-center text-red-500">
        Error: {dataLoadError.message}
      </div>
    );
  }

  return (
    <DataTable
      data={data}
      pageNo={pageNo}
      elements={elements}
      setPageNo={setPageNo}
      setElements={setElements}
    />
  );
}

export default DataFetch;
