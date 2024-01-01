import './TodoList.sass'

import Todo from './Todo'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TodoList() {
    const [data, setData] = useState([])

    useEffect(() => {
        const start = async () => {
            try {
                const response = await axios.get('http://localhost:3000/todos')
                setData(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        start()
    }, [])

    return (
        <>
            <h1>TodoList</h1>
            <ul>
                {data.map(todo => <Todo todo={todo} key={todo.id} />)}
            </ul>
        </>
    )
}
