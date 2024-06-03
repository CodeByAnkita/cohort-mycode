/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { Children } from "react";

//assignment-1
// Create a react app that has a
// 1. Header component that takes a title as a prop and renders it inside a div
// 2. The top level App component renders 2 Headers

// function App() {
//   return (
//     <div>
//       <Header title="my name is harkirat" />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

/////////////////////////////////////////////////////////////////

// //rendering
// // import React,{Fragment} from "react"
// import { useState } from "react";

// function App() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

//////////////////////////////////////////////////////////////////

// //how to stop rerendering files
// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random());
//   }

//   return (
//     <>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//     </>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }

// export default App;

//////////////////////////////////////////////////////////////////

//react memo function for remove extra re rendering
// import { useState } from "react";
// import { memo } from "react";

// function App() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//       <br />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// const Header = memo(function ({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

///////////////////////////////////////////////////////////////////

// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "Go to gym",
//       description: "Need to hit the gym from 7-9PM",
//     },
//     {
//       title: "Go to Clas",
//       description: "Need to go to the class from 4-7 PM",
//     },
//     {
//       title: "Eat foor",
//       description: "Need to eat food from 2-4 PM",
//     },
//   ]);
//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
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

///////////////////////////////////////////////////////////////

// import { useState } from "react";
// let GLOBAL_ID = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Go to gym",
//       description: "Need to hit the gym from 7-9PM",
//     },
//     {
//       id: 2,
//       title: "Go to Clas",
//       description: "Need to go to the class from 4-7 PM",
//     },
//     {
//       id: 3,
//       title: "Eat foor",
//       description: "Need to eat food from 2-4 PM",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: GLOBAL_ID++,
//         title: "new todo",
//         description: "new todo desc",
//       },
//     ]);
//     //same type of code but this is longer

//     // const newTodos = [];
//     // for (let i = 0; i < todos.length; i++) {
//     //   newTodos.push(todos[i]);
//     // }
//     // //newTodo == todos
//     // newTodos.push({
//     //   id: 4,
//     //   title: Math.random(),
//     //   description: Math.random(),
//     // });
//     // //existing ones+1
//     // setTodos(newTodos);
//   }
//   return (
//     <div>
//       <button onClick={addTodo}>Add todo</button>
//       {todos.map((todo, index) => (
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

///////////////////////////////////////////////////////////////////

// function App() {
//   return (
//     <div style={{ display: "flex" }}>
//       <Card>hi there</Card>
//       <Card>
//         <div>hello from the 2nd card</div>
//       </Card>
//     </div>
//   );
// }

// function Card({ children }) {
//   return (
//     <div
//       style={{
//         border: "1px solid black",
//         padding: 10,
//         margin: 10,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////
//real Wrapper
// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//     </div>
//   );
// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div style={{ border: "2px solid black", padding: "20" }}>
//       {innerComponent}
//     </div>
//   );
// }

// function TextComponent() {
//   return <div>Hi here</div>;
// }
// function TextComponent2() {
//   return <div>Hi here from 2</div>;
// }
// export default App;
///////////////////////////////////////////////////////////////
// //wrapper components
// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <div>hi there</div>
//       </CardWrapper>
//       <CardWrapper>
//         <div>hi there 2</div>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ Children }) {
//   // console.log(Children);
//   return (
//     <div style={{ border: "2px solid black", padding: 20 }}>{Children}</div>
//   );
// }

// export default App;

////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return (
    <div>
      {todos.map(({ title, description }) => (
        <Todo title={title} description={description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{description}</h5>
    </div>
  );
}

export default App;

///////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react"

// function App() {
//   const [id, setId] = useState(1);

//   return (
//     <div>
//       <button onClick={() => {
//         setId(id +1);
//       }}>Next</button>
//       <Todo id={id} />
//     </div>
//   )
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async (res) => {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//   }, [id])

//   return <div>
//     <h2>
//       {todo.title}
//     </h2>
//     <h5>
//       {todo.description}
//     </h5>
//   </div>
// }

// export default App

//////////////////////////////////////////////////////////
