import { useState } from "react";

export default function CustomCarousel() {
  const [present, setPresent] = useState(0);
  const arr = [
    {
      name: "example 1",
      number: 1,
    },
    {
      name: "example 2",
      number: 2,
    },
    {
      name: "example 3",
      number: 3,
    },
    {
      name: "example 4",
      number: 4,
    },
    {
      name: "example 5",
      number: 5,
    },
    {
      name: "example 6",
      number: 6,
    },
  ];

  const previousData = () => {
    if (present === 0) {
      setPresent(arr.length - 1);
    } else {
      setPresent(present - 1);
    }
  };

  const nextData = () => {
    if (present === arr.length - 1) {
      setPresent(0);
    } else {
      setPresent(present + 1);
    }
  };

  return (
    <section>
      <div className="w-2/5 flex justify-between">
        <button
          onClick={previousData}
          className="px-2 mx-3 rounded border-red-600 border-2"
        >
          Pre
        </button>
        <button
          onClick={nextData}
          className="px-2 mx-3 rounded border-red-600 border-2"
        >
          Next
        </button>
      </div>
      <section>
        <h1> Name: {arr[present].name} </h1>
        <h1> Number: {arr[present].number} </h1>
      </section>
    </section>
  );
}

// 2 < 4; // 2 choto 4 theke
// 4 > 2; // 4 boro 2 theke
