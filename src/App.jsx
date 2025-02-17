import React, { useRef, useState } from "react";

const App = () => {
  const input = useRef();
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cashB, setCashB] = useState(0);
  const [action, setAction] = useState("");
  const [category, setCategory] = useState("");
  const [arr, setArr] = useState([]);

  const handleTransaction = () => {
    const amount = +input.current?.value;

    if (!amount || amount <= 0 || !action || !category) {
      alert("Please enter a valid amount and select an action/category!");
      return;
    }

    if (action === "cashin") {
      setCashIn((prev) => prev + amount);
      setCashB((prev) => prev + amount);
    } else if (action === "cashout") {
      setCashOut((prev) => prev + amount);
      setCashB((prev) => prev - amount);
    }

    setArr((prevArr) => [
      ...prevArr,
      { id: Date.now(), action, category, amount },
    ]);

    input.current.value = "";
    setAction("");
    setCategory("");
  };

  return (
    <div className="w-screen h-auto bg-gray-900 text-white flex flex-col items-center p-5">
      <h2 className="font-bold text-3xl mb-6">Expense Management System</h2>

      <div className="w-full md:w-2/4 bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-around text-xl font-semibold p-4 bg-gray-700 rounded-lg">
          <p>Cash In: <span className="text-green-400">${cashIn}</span></p>
          <p>Cash Out: <span className="text-red-400">${cashOut}</span></p>
          <p>Balance: <span className="text-yellow-400">${cashB}</span></p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <input
            type="number"
            placeholder="Enter Amount"
            ref={input}
            className="p-3 w-80 text-black rounded-md shadow-md outline-none"
          />
          <div className="flex gap-4 mt-3">
            <select
              className="p-3 bg-white text-black rounded-md shadow-md"
              onChange={(e) => setAction(e.target.value)}
              value={action}
            >
              <option value="" disabled>Select Action</option>
              <option value="cashin">Cash In</option>
              <option value="cashout">Cash Out</option>
            </select>
            {action && (
              <select
                className="p-3 bg-white text-black rounded-md shadow-md"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="" disabled>Select Category</option>
                {action === "cashin" && (
                  <>
                    <option value="salary">Salary</option>
                    <option value="investment">Investment</option>
                    <option value="loan">Loan</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </>
                )}
                {action === "cashout" && (
                  <>
                    <option value="groceries">Groceries</option>
                    <option value="fuel">Fuel</option>
                    <option value="food">Food/Drink</option>
                    <option value="taxi">Taxi</option>
                    <option value="clothes">Clothes</option>
                    <option value="shopping">Shopping</option>
                    <option value="electricity">Electricity</option>
                  </>
                )}
              </select>
            )}
          </div>

          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
            onClick={handleTransaction}
            disabled={!input.current?.value || !action || !category}
          >
            Add Transaction
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/4 mt-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Transaction History</h3>
        <div className="max-h-64 overflow-y-auto space-y-3">
          {arr.length === 0 ? (
            <p className="text-center text-gray-400">No transactions yet.</p>
          ) : (
            arr.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-gray-700 rounded-md shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-gray-400">{new Date(item.id).toLocaleString()}</p>
                  <p className="text-lg font-bold">{item.action.toUpperCase()}</p>
                  <p>Category: {item.category}</p>
                  <p>Amount: ${item.amount}</p>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md">
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
