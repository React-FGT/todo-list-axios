import axios from 'axios';
import './TodoForm.sass'
import { useForm } from 'react-hook-form'
import { IoMdAdd } from "react-icons/io";

export default function TodoForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ shouldUseNativeValidation: false })

    const onSubmit = handleSubmit(async (data) => {
        try {
            const todo = { id: null, title: data.title, done: false }
            await axios.post('http://localhost:3000/todos', todo)
            reset()
        } catch (error) {
            alert(error)
        }
    })

    return (
        <div className='todo-form'>
            <h2>Añadir Todo</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Título</label>
                <input type="text" placeholder='Titulo de la tarea...' {...register("title", {
                    required: {
                        value: true,
                        message: 'Campo obligatorio'
                    },
                    minLength: {
                        value: 3,
                        message: 'Debe tener 3 o más caracteres'
                    }
                })} />
                {errors.title && <span>{errors.title.message}</span>}

                <button type="submit"><IoMdAdd style={{ fontSize: 'xx-large' }} /></button>
            </form>
        </div>
    )
}
