import { useEffect, useState } from 'react'
import { TaskInput } from './components/TaskInput'
import { TaskList, TypeFilter, TypeList } from './components/TaskList'
import { FilterKey, TaskFilter } from './components/TaskFilter'
import { getTasks, setItems } from './utils/lsServise'

function App() {
  // const initial = [
  //   {
  //     id: 1,
  //     title: 'Pay Bills',
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Pay Completed',
  //     completed: true,
  //   },
  //   {
  //     id: 3,
  //     title: 'Go Shopping',
  //     completed: false,
  //   },
  // ]

  const initialFilter = {
    todo: true, completed: true
  }

  useEffect(() => {
    // const tasksLs = JSON.parse(localStorage.getItem('tasks') || '[]')
    // setTasks(getTasks())
  }, [])

  const [tasks, setTasks] = useState<TypeList>(getTasks())
  const [filter, setFilter] = useState<TypeFilter>(initialFilter)

  const handleFilter = (filteredTasks: FilterKey) => {
    switch (filteredTasks) {
      case 'all':
        setFilter(initialFilter)
        break;
      case 'todo':
        setFilter({todo: true, completed: false})
        break;
      case 'completed':
        setFilter({todo: false, completed: true})
        break;
      default:
        break;
    }
  }
  
  const handleAddTask = (value: string) => {
    const task = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    setTasks([task, ...tasks])
    setItems([task, ...tasks])
  }

  const handleDeleteTask = (id: number) => {
    const updetedTasks = tasks.filter(task => task.id !== id)
    setTasks(updetedTasks)
    setItems(updetedTasks)
  }

  const handleCompleteTask = (id: number) => {
    const updetedTasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
    setTasks(updetedTasks)
    setItems(updetedTasks)
  }

  return (
    <div className='main'>
      <TaskInput addTask={handleAddTask}/>
      <TaskFilter onFilter={handleFilter}/>
      <TaskList 
          tasks={tasks} 
          deleteTask={handleDeleteTask}
          completeTask={handleCompleteTask}
          filterTasks={filter}
          />
      </div>
  )
}

export default App
