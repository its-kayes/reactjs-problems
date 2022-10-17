/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import { useState } from "react";

// interface State {
//   number: number;
// }

export default function NumberToComponents() {
  const [data, setData] = useState<number>(0);

  const array: number[] = [];
  for (let i: number = 0; i < data; i++) {
    array.push(i);
  }
  console.log(array);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const totalElements: number = e.target.number.value;
    setData(totalElements);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-red-600"> How many box </h1>
          <input name="number" type="number" />
          <button type="submit">Submit</button>
        </form>
      </div>
      {array.map((item, index: number) => (
        <div>
          <h1> check {index + 1} </h1>
        </div>
      ))}
    </div>
  );
}
