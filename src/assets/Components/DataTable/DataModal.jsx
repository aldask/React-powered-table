import React from "react";

function DataModal({ data, onClose }) {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-lg relative"
      data-testid="data-modal"
    >
      <button
        className="absolute top-0 right-2 font-bold bg-inherit p-2 border-none outline-none transition duration-300 ease-in-out hover:text-red-500"
        onClick={onClose}
        data-testid="modal-close-btn"
      >
        X
      </button>
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      <div className="text-left">
        <p className="font-bold">
          ID: <span className="font-normal">{data.id}</span>
        </p>
        <p className="font-bold">
          First Name: <span className="font-normal">{data.firstName}</span>
        </p>
        <p className="font-bold">
          Last Name: <span className="font-normal">{data.lastName}</span>
        </p>
        <p className="font-bold">
          Birth date: <span className="font-normal">{data.birthDate}</span>
        </p>
        <p className="font-bold">
          Gender: <span className="font-normal">{data.gender}</span>
        </p>
        <p className="font-bold">
          Customer identification code:{" "}
          <span className="font-normal">{data.customerIdentificationCode}</span>
        </p>
      </div>
    </div>
  );
}

export default DataModal;
