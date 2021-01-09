/* A simple TS app to fetch and display data from an API call */

import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// This allows us to specify the data types for each property that we are receiving
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The todo with ID: ${id}
        Has a title of: ${title}
        Is it finished: ${completed}
    `);
};

axios.get(url)
  .then(res => {
    // We format the data as the interface so that we can error handle
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  });
