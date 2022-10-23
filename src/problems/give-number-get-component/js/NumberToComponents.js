/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { useEffect, useState } from "react";

export default function NumberToComponents() {
  const [data, setData] = useState(0);
  const [inputState, setInputState] = useState({});

  const array = [];
  for (let i = 0; i < data; i++) {
    array.push(i);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setData(e.target.number.value);
  };

  const getData = (e) => {
    e.preventDefault();
    console.log(inputState);
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
      <form onSubmit={getData}>
        {array.map((item, index) => (
          <div>
            <input
              key={index + 1}
              value={inputState[`input-${index + 1}`]}
              onChange={(e) =>
                setInputState(() => ({
                  ...inputState,
                  [`input-${index + 1}`]: e.target.value,
                }))
              }
              className="border"
              type="text"
              name={`input-${index + 1}`}
            />
          </div>
        ))}
        <button className="px-2 mx-2 border rounded py-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
