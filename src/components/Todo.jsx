import axios from 'axios'
import './Todo.sass'

import { AiTwotoneDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'

export default function Todo({ todo }) {
    const del = async () => {
        try {
            await axios.delete(`http://localhost:3000/todos/${todo.id}`)
        } catch (error) {
            alert(error)
        }
    }

    const setToDone = async () => {
        try {
            await axios.patch(`http://localhost:3000/todos/${todo.id}`, { done: true })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <li className={todo.done ? 'done' : 'notDone '}>
            {todo.title}
            <button onClick={setToDone}><MdOutlineDone /></button>
            <button onClick={del}>
                <AiTwotoneDelete />
            </button>
        </li >
    )
}
