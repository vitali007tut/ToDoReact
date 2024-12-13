import { Task } from "../Task";
import { Empty } from "antd";
import * as sx from "./styles";
import { TypeFilter, TypeList } from "../../types";

export const TaskList = ({
  tasks,
  deleteTask,
  completeTask,
  filterTasks,
}: {
  tasks: TypeList;
  deleteTask: (id: number) => void;
  completeTask: (id: number) => void;
  filterTasks: TypeFilter;
}) => {
  const tasksToDo = tasks.filter((task) => !task.completed);
  const tasksCompleted = tasks.filter((task) => task.completed);

  return (
    <>
      {filterTasks.todo && (
        <>
          <h3 style={sx.title}>ToDo</h3>
          {tasksToDo.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              onDelete={deleteTask}
              onComplete={completeTask}
              completed={task.completed}
            />
          ))}
          {!tasksToDo.length && <Empty />}
        </>
      )}

      {filterTasks.completed && (
        <>
          <h3 style={sx.title}>Completed</h3>
          {tasksCompleted.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              onDelete={deleteTask}
              onComplete={completeTask}
              completed={task.completed}
            />
          ))}
          {!tasksCompleted.length && <Empty />}
        </>
      )}
    </>
  );
};
