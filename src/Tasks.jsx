import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Tasks() {
  const { userId } = useParams();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  return (
    <div>
      <h1>Fetching tasks</h1>
      {/* {console.log(tasks)} */}
      {tasks.map((task) => {
        if (userId == task.userId) {
          return (
            <p key={task.id}>
              {task.id - "20" + ")"} {task.title}
            </p>
          );
        }
      })}
    </div>
  );
}

export default Tasks;
