import { TypeList } from "../components/TaskList"

export const setItems = (tasks: TypeList) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const getTasks = (): TypeList => {
    return JSON.parse(localStorage.getItem('tasks') || '[]')
}