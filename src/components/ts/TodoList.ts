export const retrieveInitialData = async () => {
  const todoData = await (
    await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
  ).json();

  const todoDataUl =
    document.getElementById("todo-data") || document.createElement("ul");
  todoData.forEach((item: any) => {
    const liItem = document.createElement("li");
    liItem.innerText = item.title;
    todoDataUl.appendChild(liItem);
  });
};
