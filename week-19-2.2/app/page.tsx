export default async function Blog() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: { revalidate: 10 },
  });

  const data = await res.json();
  console.log("data found from the be server is");
  console.log(JSON.stringify(data));
  const todos = data.todos;

  console.log("todos");
  return (
    <div>
      {todos.map((todo: any) => (
        <div key={todo.id}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
