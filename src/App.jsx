// import React, { useRef, useState } from 'react';

// const App = () => {
//   const input = useRef();
//   const [cashIn, setCashIn] = useState(0);
//   const [cashOut, setCashOut] = useState(0);
//   const [cashB, setCashB] = useState(0);
//   const [action, setAction] = useState("");
//   const [category, setCategory] = useState("");
//   const [arr, setArr] = useState([]);
//   const [number,setNumber] = useState(0)

//   const button = () => {
//     const amount = +input.current?.value;
//     setNumber((n)=> n+1)

//     if (!amount || !action || !category) {
//       alert("Please enter a valid amount and select an action/category!");
//       return;
//     }

//     if (action === "cashin") {
//       setCashIn((prev) => prev + amount);
//       setCashB((prev) => prev + amount);
//     } else if (action === "cashout") {
//       setCashOut((prev) => prev + amount);
//       setCashB((prev) => prev - amount);
//     }

//     setArr((prevArr) => [...prevArr, { action, category, amount }]);

//     input.current.value = "";
//     setAction("");
//     setCategory("");
//   };

//   const isDisabled = !input.current?.value || !action || !category;

//   return (
//     <div className='w-screen h-screen bg-sky-200'>
//             <h2 className='font-bold text-center text-2xl'>Expense Management System</h2>

//     <div className='md:w-3/6 w-{100%} border mt-5  h-96 md:p-5 md:ml-80 shadow shadow-gray-500'>
//       <div className='flex justify-center items-center gap-5 font-bold md:gap-20 md:text-2xl md:p-4'>
//         <p className='text-center'>Cash In {<br></br>}{cashIn}</p>
//         <p className='text-center'>Cash Out{<br></br>} {cashOut}</p>
//         <p className='text-center'>Cash Balance{<br></br>} {cashB}</p>
//       </div>
//       <div className='md:flex md:justify-center flex flex-col md:items-center gap-2 md:gap-5 '>   
//         <input type="number" placeholder="Add your cash" ref={input} className='border border-black p-2 rounded w-80 ml-7' />
//         <div className='flex gap-4'>
//       <select defaultValue="" className='border border-black p-2 rounded w-40 ml-7 text-center' onChange={(e) => setAction(e.target.value)}>
//         <option value="" disabled >
//           Select Action
//         </option>
//         <option value="cashin">Cash In</option>
//         <option value="cashout">Cash Out</option>
//       </select>
//       {action && (
//         <select defaultValue="" className='border border-black p-2 rounded' onChange={(e) => setCategory(e.target.value)}>
//           <option value="" disabled>
//             Select Category
//           </option>
//           {action === "cashin" && (
//             <>
//               <option value="salary">Salary</option>
//               <option value="investment">Investment</option>
//               <option value="loan">Loan</option>
//               <option value="business">Business</option>
//               <option value="other">Other</option>
//             </>
//           )}
//           {action === "cashout" && (
//             <>
//               <option value="groceries">Groceries</option>
//               <option value="fuel">Fuel</option>
//               <option value="food/drink">Food/Drink</option>
//               <option value="taxi">Taxi</option>
//               <option value="clothes">Clothes</option>
//               <option value="shopping">Shopping</option>
//               <option value="electricity">Electricity</option>
//             </>
//           )}
//         </select>

        
//       )}
//       </div>
//       <div className='flex justify-center items-center'>
//       <button className='w-20 h-10 shadow rounded bg-gray-400 hover:bg-gray-600' onClick={button} disabled={isDisabled}>
//         Done
//       </button>
//       </div>
//       </div>

//       <div>
//         {action && category && input.current?.value
//           ? `${action} - ${category}: ${input.current.value}`
//           : null}
//       </div>
//       <div className='flex justify-center items-center gap-5 '>
//         {arr.map((item, index) => (
//           <div className='flex  justify-center items-center  shadow gap-2 mt-2' key={index}>
//             <p>{number}</p>
//             <h1>Action: {item.action}</h1>
//             <p>Category: {item.category}</p>
//             <p>Amount: {item.amount}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
  
// };

// export default App;
import React, { useRef, useState } from "react";

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

  const isDisabled = !input.current?.value || !action || !category;

  return (
    <div className="w-screen h-screen bg-blue-900 text-white">
      <h2 className="font-bold text-center text-2xl">
        Expense Management System
      </h2>

      <div className="md:w-3/6 w-full border mt-5 h-auto md:p-5 md:ml-80 shadow shadow-gray-500">
        <div className="flex justify-center items-center gap-5 font-bold md:gap-20 md:text-2xl md:p-4">
          <p className="text-center">
            Cash In <br />
            {cashIn}
          </p>
          <p className="text-center">
            Cash Out <br />
            {cashOut}
          </p>
          <p className="text-center">
            Cash Balance <br />
            {cashB}
          </p>
        </div>
        <div className="flex justify-center flex-col items-center gap-2 md:gap-5">
          <input
            type="number"
            placeholder="Add your cash"
            ref={input}
            className="border border-black p-2 rounded w-80 ml-7 text-black"
          />
          <div className="flex gap-4">
            <select
              defaultValue=""
              className="border border-black p-2 rounded w-40 ml-7 text-center  text-black"
              onChange={(e) => setAction(e.target.value)}
            >
              <option value="" disabled>
                Select Action
              </option>
              <option value="cashin">Cash In</option>
              <option value="cashout">Cash Out</option>
            </select>
            {action && (
              <select
                defaultValue=""
                className="border border-black p-2 rounded  text-black"
                onChange={(e) => setCategory(e.target.value)}
              >
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
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-20 h-10 shadow rounded bg-gray-400 hover:bg-gray-600"
              onClick={button}
              disabled={isDisabled}
            >
              Done
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap mt-4">
          {arr.map((item) => (
            <div
              className="flex flex-col border p-4 rounded shadow-md bg-white text-black"
              key={item.id}
            >
              <p className="text-sm text-gray-600">
                Date: {new Date(item.id).toLocaleString()}
              </p>
              <h1 className="text-lg font-bold">Action: {item.action}</h1>
              <p>Category: {item.category}</p>
              <p>Amount: ${item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
