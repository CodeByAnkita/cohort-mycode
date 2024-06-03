// // import React from "react";

// // function App() {
// //   return (
// //     <div>
// //       <Button></Button>
// //     </div>
// //   );
// // }

// // function Button(props) {
// //   const [count, setCount] = React.useState(0);

// //   function onButtonClick() {
// //     setCount(count + 1);
// //   }

// //   return React.createElement(
// //     "button",
// //     { onClick: onButtonClick },
// //     `Counter ${count}`
// //   );
// // }

// // export default App;

// import React from "react";

// function App() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <div>
//       <Button count={count} setCount={setCount}>
//         {" "}
//       </Button>
//     </div>
//   );
// }

// function Button(props) {
//   function onButtonClick() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onButtonClick}>counter {props.count} </button>;
// }
// export default App;

// TODO APP
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    },
    {
      title: "Study DSA",
      description: "Study DSA form 9-100",
      completed: true,
    },
  ]);

  function addTodo() {
    // [1, 2]
    // [...todos, 3] => [1, 2, 3]
    setTodos([
      ...todos,
      {
        title: "new Todo",
        description: "desc of new todo",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
