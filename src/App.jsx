import React, { useRef, useState } from 'react';

const App = () => {
  const input = useRef();
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cashB, setCashB] = useState(0);
  const [action, setAction] = useState("");
  const [category, setCategory] = useState("");
  const [arr, setArr] = useState([]);

  const button = () => {
    const amount = +input.current?.value;

    if (!amount || !action || !category) {
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

    setArr((prevArr) => [...prevArr, { action, category, amount }]);

    input.current.value = "";
    setAction("");
    setCategory("");
  };

  const isDisabled = !input.current?.value || !action || !category;

  return (
    <div className='w-screen h-screen bg-sky-200'>
    <div className='w-3/6 border  h-96 p-5 ml-80 shadow shadow-gray-500'>
      <h2 className='font-bold'>Expense Management System</h2>
      <div className='flex justify-center items-center gap-20 text-2xl p-4'>
        <p className='text-center'>Cash In {<br></br>}{cashIn}</p>
        <p className='text-center'>Cash Out{<br></br>} {cashOut}</p>
        <p className='text-center'>Cash Balance{<br></br>} {cashB}</p>
      </div>
      <div className='flex justify-center items-center gap-5 '>   
        <input type="number" placeholder="Add your cash" ref={input} className='border border-black p-2 rounded' />
      <select defaultValue="" className='border border-black p-2 rounded' onChange={(e) => setAction(e.target.value)}>
        <option value="" disabled >
          Select Action
        </option>
        <option value="cashin">Cash In</option>
        <option value="cashout">Cash Out</option>
      </select>
      {action && (
        <select defaultValue="" className='border border-black p-2 rounded' onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select Category
          </option>
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
              <option value="food/drink">Food/Drink</option>
              <option value="taxi">Taxi</option>
              <option value="clothes">Clothes</option>
              <option value="shopping">Shopping</option>
              <option value="electricity">Electricity</option>
            </>
          )}
        </select>
        
      )}

      <button className='w-20 h-10 shadow rounded bg-gray-400 hover:bg-gray-600' onClick={button} disabled={isDisabled}>
        Done
      </button>
      </div>

      <div>
        {action && category && input.current?.value
          ? `${action} - ${category}: ${input.current.value}`
          : null}
      </div>
      <div className='flex justify-center items-center gap-5 '>
        {arr.map((item, index) => (
          <div className='flex flex-col justify-center items-center w-60 h-32 shadow gap-2 mt-2' key={index}>
            <h1>Action: {item.action}</h1>
            <p>Category: {item.category}</p>
            <p>Amount: {item.amount}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
  
};

export default App;