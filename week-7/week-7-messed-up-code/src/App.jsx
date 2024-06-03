//Routes properly
// import { useContext, useState, Suspense, lazy } from "react";
// import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading..."}>
//                 {" "}
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading..."}>
//                 {" "}
//                 <Landing />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing
//         </button>
//         <button
//           onClick={() => {
//             navigate("/Dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////////
//propdling
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({ count, setCount }) {
//   return (
//     <div>
//       <CountRenderer count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   );
// }
// function CountRenderer({ count }) {
//   return <div>{count}</div>;
// }
// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default App;
/////////////////////////////////////////////////////////
//// contextApi
// import { useContext, useState } from "react";
// import { CountContext } from "./context";

// function App() {
//   const [count, setCount] = useState(0);

//   // wrap anyone that wants to use the teleported value inside a provider
//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count({ setCount }) {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons setCount={setCount} />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useContext(CountContext);

//   return <div>{count}</div>;
// }

// function Buttons({ setCount }) {
//   const count = useContext(CountContext);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default App;
//////////////////////////////////////

//// recoil added
// import { useContext, useState } from "react";
// import { CountContext } from "./context";
// import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
// import { countAtom } from "./store/atoms/count";

// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
//     </div>
//   );
// }
// function Count() {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />
//     </div>
//   );
// }

// function CountRenderer() {
//   const count = useRecoilValue(countAtom);

//   return (
//     <div>
//       <b>{count}</b>
//     </div>
//   );
// }

// function Buttons() {
//   const [count, setCount] = useRecoilState(countAtom);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </button>

//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////
import { useContext, useMemo, useState } from "react";
import { CountContext } from "./context";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("re-render");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>{isEven ? "It is even" : null}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
