/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { useState } from "react";

export default function NumberToComponents() {
  const [data, setData] = useState(0);

  const array = [];
  for (let i = 0; i < data; i++) {
    array.push(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.number.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          How many box
          <input
            className="border mx-2 p-2 rounded"
            placeholder="Number of box"
            name="number"
            type="number"
          />
          <button className="px-2 mx-2 border rounded py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
      {array.map((item, index) => (
        <div>
          <h1> Box {index + 1} </h1>
        </div>
      ))}
    </div>
  );
}
