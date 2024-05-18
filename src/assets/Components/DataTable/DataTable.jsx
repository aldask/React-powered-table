import React, { useState } from "react";
import ModalData from "./DataModal";

function DataTable({ data, pageNo, elements, setPageNo, setElements }) {
  const [modalData, setModalData] = useState(false);

  const handleOpenModal = (modal) => {
    setModalData(modal);
  };

  const handleCloseModal = () => {
    setModalData(false);
  };

  const handleViewChange = (event) => {
    setElements(Number(event.target.value));
    setPageNo(1);
  };

  return (
    <div className="mx-auto p-4 w-full max-w-5xl">
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 border-b-2 border-r-2 border-gray-200 text-gray-700 font-bold text-center">
                First Name
              </th>
              <th className="p-4 border-b-2 border-r-2 border-gray-200 text-gray-700 font-bold text-center">
                Last Name
              </th>
              <th className="border-b-2 border-gray-200 text-gray-700 font-bold text-center">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 border-b border-r border-gray-200 text-gray-800 font-normal text-left">
                  {data.firstName}
                </td>
                <td className="py-3 px-4 border-b border-r border-gray-200 text-gray-800 font-normal text-left">
                  {data.lastName}
                </td>
                <td className="py-3 px-4 border-b border-gray-200 text-gray-800 font-normal text-center">
                  <button
                    onClick={() => handleOpenModal(data)}
                    className="px-4 py-2 font-semibold text-gray-900 bg-gray-200 border-none rounded-md shadow-md hover:bg-gray-300 hover:text-gray-800 transition duration-300 ease-in-out"
                  >
                    More info
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
          disabled={pageNo === 1}
          className="px-4 py-2 font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-300 ease-in-out hover:border-slate-300 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 disabled:opacity-50"
          data-testid="prev-btn"
        >
          Previous
        </button>
        <span>Page {pageNo}</span>
        <button
          onClick={() => setPageNo((prev) => prev + 1)}
          className="px-4 py-2 font-semibold text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm transition-all duration-300 ease-in-out hover:border-slate-300 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200"
          data-testid="next-btn"
        >
          Next
        </button>
      </div>

      <div className="mt-4">
        <label>
          Rows per page:
          <select
            value={elements}
            onChange={handleViewChange}
            className="ml-2 p-2 font-semibold text-black bg-white border border-gray-300 rounded-md shadow-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>

      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <ModalData data={modalData} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}

export default DataTable;
