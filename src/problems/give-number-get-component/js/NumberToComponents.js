/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { useState } from "react";

export default function NumberToComponents() {
  const [data, setData] = useState(0);
  const array = [];
  for (let i = 0; i < data; i++) {
    array.push(i);
  }
  console.log(array);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.number.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          How many box
          <input name="number" type="number" />
          <button type="submit">Submit</button>
        </form>
      </div>
      {array.map((item, index) => (
        <div>
          <h1> check 1 </h1>
        </div>
      ))}
    </div>
  );
}
