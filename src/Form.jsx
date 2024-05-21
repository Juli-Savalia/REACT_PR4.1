import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState([
    { id: "", name: "", mail: "", salary: "" },
  ]);

  const addrow = () => {
    let newfield = { id: Date.now(), name: "", mail: "", salary: "" };
  };

  const delrow = (id) => {
    setInput(input.filter((item) => item.id !== id));
    alert("record deleted successfully..");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center py-5">Dynamic Add & Delete Component</h1>
        <table className="table table-danger table-striped table-hover w-100 text-center py-5">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>E-Mail</th>
              <th>SALARY</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {input.map((item, index) => {
              return (
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="email" />
                  </td>
                  <td>
                    <input type="tel" />
                  </td>
                  <td>
                    <button onClick={() => addrow()}>+</button>
                    <button onClick={() => delrow(item.id)}>x</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Form;
