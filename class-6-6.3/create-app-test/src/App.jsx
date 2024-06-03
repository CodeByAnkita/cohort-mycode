// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//       </button>
//     </div>
//   );
// }
// export default App;

// /////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
//   console.log("hi i am from app.jsx");
//   // if you dont use useEffect then rereder happing continous data call  with useEffect when input change then only data callor render

//   // fetch("https://google.com", async (res) => {
//   //   const json = await res.json();
//   //   setBankData(json);
//   //   // Assume it is { income: 100 }
//   // });

//   // setTimeout(() => {
//   //   setExchangeData({
//   //     returns: 100,
//   //   });
//   // }, 1000);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //   setBankData({
//   //     returns: 100,
//   //   });
//   // }, 3000);

//   //   setTimeout(() => {
//   //     setExchangeData({
//   //       returns: 100,
//   //     });
//   //   }, 1000);
//   // }, []);

//   useEffect(function () {
//     setTimeout(() => {
//       setBankData({ income: 100 });
//     }, 3000);
//   }, []);
//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({ returns: 100 });
//     }, 1000);
//   }, []);
//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

///////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     });
//   }, []);

//   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

///////////////////////////////////////////

// import { useEffect, useState } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     });
//   }, []);

//   const cryptoReturns = exchange1Data.returns + exchange2Data.returns;

//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

/////////////////////////////////////////
// import { useEffect, useState, useMemo, memo, useCallback } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 5000);
//   }, []);

//   //usecallback is not about minimizing the amount of code that is run
//   //usecallback is about not rerendering a chalid component if the function hasnt/doesnt need to change across renders

//   const calculateCryptoReturns = useCallback(
//     function () {
//       return exchange1Data.returns + exchange2Data.returns;
//     },
//     [exchange1Data, exchange2Data]
//   );

//   return (
//     <div>
//       <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
//     </div>
//   );
// }

// //memo => useMemo (this is a hook)  both are different
// const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
//   console.log("crypto child re-rendered ");
//   return <div>Your crypto returns are{calculateCryptoReturns()}</div>;
// });
// export default App;

//////////////////////////////////////////////////////
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000);
  }, []);

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default App;
