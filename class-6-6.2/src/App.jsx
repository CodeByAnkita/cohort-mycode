//USEEFFECT
// // we use useEffect because with that we can render once
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     //   fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
//     //     const json = await res.json();
//     //     setTodos(json.todos);
//     //   });
//     // }, []);
//     axios
//       .get("https://sum-server.100xdevs.com/todos")
//       .then(function (response) {
//         setTodos(response.data.todos);
//       });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }
// export default App;

//useEffect
// //Write a component that takes a todo id as an input
// // And fetches the data for that todo from the given endpoint
// // And then renders it

// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// function App() {
//   return (
//     //insted of 5 whatever id number write that id is call
//     <div>
//       <Todo id={5} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios
//       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then((response) => {
//         setTodo(response.data.todo);
//       });
//   }, []);

//   return (
//     <div>
//       ID: {id}
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;

// // //useEffect
// // //in this whatever id button is click then that id is called inthat we have to give id in useeffect call also

// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
// function App() {
//   //state? usestate
//   const [selectedId, setSelectedId] = useState(1);
//   return (
//     //both typr is same
//     <div>
//       <button onClick={() => setSelectedId(1)}>1</button>
//       <button
//         onClick={function () {
//           setSelectedId(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(3);
//         }}
//       >
//         3
//       </button>

//       <Todo id={selectedId} />
//     </div>
//   );
// }
// function Todo({ id }) {
//   const [todo, setTodo] = useState({});
//   // useEffect(() => {
//   //   fetch("https://sum-server.100xdevs.com/todo?id=" + id).then(async function (
//   //     res
//   //   ) {
//   //     const json = await res.json();
//   //     setTodo(json.todo);
//   //   });
//   // }, []);
//   useEffect(() => {
//     axios
//       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then((response) => {
//         setTodo(response.data.todo);
//       });
//   }, [id]);

//   return (
//     <div>
//       ID: {id}
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;

// //Usememo
// //with this usememo we can stop extra rerendering
// import { useEffect, useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   const [count, setcount] = useState(0);

//   // let count = useMemo(() => {
//   //   let finalCount = 0;
//   //   for (let i = 1; i <= inputValue; i++) {
//   //     finalCount = finalCount + i;
//   //   }
//   //   return finalCount;
//   // }, [inputValue]);

//   useEffect(() => {
//     let finalCount = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       finalCount = finalCount + i;
//     }
//     setcount(finalCount);
//   }, [inputValue]);
//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           setInputValue(e.target.value);
//         }}
//         placeholder={"Find sum from 1 to n"}
//       ></input>
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

// export default App;

// //useCallback
// import { memo, useState, useEffect, useMemo, useCallback } from "react";

// var a = 1;
// //usememo
// function App() {
//   const [counter, setCounter] = useState(0);

//   //usecallback
//   // function a() {
//   //   console.log("child clicked");
//   // }

//   const a = useCallback(function () {
//     console.log("hi there");
//   }, []);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//       <Demo a={a} />
//     </div>
//   );
// }

// const Demo = memo(function ({ a }) {
//   console.log("render");
//   return <div>hi there{a}</div>;
// });

// export default App;

import { memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  // function onClick() {
  //   console.log("child clicked");
  // }

  //in this use of usecallback then if dependies/child are change than only render without not render
  const onClick = useCallback(() => {
    console.log("hi there");
  }, []);

  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}
//when parent render child also render but if we use memo than parent render but child not be render all time
const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default App;
