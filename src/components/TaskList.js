import { useState, useEffect } from "react";
import { List } from "antd";
import Task from "./Task";

const fakeTasks = [
    { id: 1, task: 'Buy Milk', done: false },
    { id: 2, task: 'Buy Beer', done: false },
    { id: 3, task: 'Buy Wine', done: true },
    { id: 4, task: 'Buy Truly', done: false },
    { id: 5, task: 'Buy Paper Towels', done: false },
]

export default function TaskList(){
    const [tasks, setTasks] = useState(fakeTasks);
    useEffect(() => {
        fetch("https://much-todo-bas.uc.r.appspot.com/tasks")
        .then(response => response.json())
        .then(data => setTasks(data)) //you could also just say setTasks
        .catch(alert)
    }, [])
    return (
        <List 
        bordered //bordered by itself a prop, is like saying bordered={true} so because its already true you can leave it as true
        dataSource={tasks} 
        renderItem={item => <Task item={item}/>}
         
        />
    )
}