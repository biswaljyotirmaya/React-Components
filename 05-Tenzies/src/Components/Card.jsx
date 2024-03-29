import React, { useEffect, useState } from "react";

function Card() {
  const [numbers, setNumbers] = useState(new Array(10).fill(0));
  const [isTrue, setIsTrue] = useState([]);
  const [requiredNumber, setRequiredNumber] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setRequiredNumber(parseInt(prompt("Enter a number:")));
  }, []);

  useEffect(() => {
    if (isTrue.length === 10) {
      alert("You win") && setNumbers(new Array(10).fill(0));
      setDone(true);
      alert("Would you like to play anathor round") && setDone(false);
      setRequiredNumber(parseInt(prompt("Enter a number:")));
    }
  }, [isTrue]);

  const handleSelect = (index) => {
    if (isTrue.length === 10) {
      return;
    }
    setIsTrue((prevIsTrue) => [...prevIsTrue, index]);
  };

  const handleDiceRoll = () => {
    if (done) {
      return;
    }
    const newNumbers = numbers.map((number, index) =>
      isTrue.includes(index) ? number : Math.floor(Math.random() * 10)
    );
    setNumbers(newNumbers);
  };

  return (
    <div className="rounded shadow-md p-8">
      <div className="flex-column items-center justify-center text-2xl font-semibold text-center">
        <p>Roll the dice until all numbers are the same!</p>
        {!done ? (
          <p>
            Your number is{" "}
            <span className="text-4xl font-semibold">{requiredNumber}</span>
          </p>
        ) : (
          <p>You Win!</p>
        )}
      </div>

      <div className="flex flex-wrap my-4">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`p-4 text-2xl font-semibold flex items-center justify-center basis-1/6 m-2 shadow-md rounded-lg cursor-pointer ${
              isTrue.includes(index)
                ? "bg-green-400"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
            onClick={() => handleSelect(index)}
          >
            {number}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="text-white font-semibold text-xl shadow-md mt-4 px-4 py-2 bg-[#0057ff] rounded-md hover:shadow-black"
          onClick={handleDiceRoll}
          disabled={done}
        >
          Roll
        </button>
      </div>
    </div>
  );
}

export default Card;
