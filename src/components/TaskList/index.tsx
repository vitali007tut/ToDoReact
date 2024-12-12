import { Task } from "../Task";
import { Empty, Typography } from "antd";

export type TypeList = {
  id: number;
  title: string;
  completed: boolean;
}[];

export type TypeFilter = {
  todo: boolean;
  completed: boolean;
};

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
          <Typography.Paragraph className="tittle">ToDo</Typography.Paragraph>
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
          <Typography.Paragraph className="tittle">
            Completed
          </Typography.Paragraph>
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
