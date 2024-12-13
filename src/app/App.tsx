import { useState } from "react";
import { TaskFilter } from "../components/TaskFilter";
import { TaskInput } from "../components/TaskInput";
import { TaskList } from "../components/TaskList";
import { getTasks, setItems } from "../utils/lsServise";
import * as sx from "./styles";
import { TypeList, TypeFilter, FilterKey } from "../types";

export const App = () => {
  const initialFilter = {
    todo: true,
    completed: true,
  };

  const [tasks, setTasks] = useState<TypeList>(getTasks());
  const [filter, setFilter] = useState<TypeFilter>(initialFilter);

  const handleFilter = (filteredTasks: FilterKey) => {
    switch (filteredTasks) {
      case "all":
        setFilter(initialFilter);
        break;
      case "todo":
        setFilter({ todo: true, completed: false });
        break;
      case "completed":
        setFilter({ todo: false, completed: true });
        break;
      default:
        break;
    }
  };

  const handleAddTask = (value: string) => {
    const task = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTasks([task, ...tasks]);
    setItems([task, ...tasks]);
  };

  const handleDeleteTask = (id: number) => {
    const updetedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updetedTasks);
    setItems(updetedTasks);
  };

  const handleCompleteTask = (id: number) => {
    const updetedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updetedTasks);
    setItems(updetedTasks);
  };

  return (
    <div style={sx.app}>
      <TaskInput addTask={handleAddTask} />
      <TaskFilter onFilter={handleFilter} />
      <TaskList
        tasks={tasks}
        deleteTask={handleDeleteTask}
        completeTask={handleCompleteTask}
        filterTasks={filter}
      />
    </div>
  );
};
