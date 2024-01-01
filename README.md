# todo-list-axios

Debemos crear un simple todo list. Debe cumplir con los requisitos especificados.

## Antes de comenzar

Instala las dependencias
```bash
npm i
```

Instala axios para realizar peticiones post, get, delete etc...
```bash
npm i axios
```

Y por último vamos a utilizar para validaciones del formulario react-hook-form
```bash
npm i react-hook-form
```

Instala json-server

```bash
npm install -g json-server
```

Para poder simular una API, debemos tener iniciado el ser JSON
```bash
json-server file.json
```

## Documentación que te va a ayudar

[axios](https://axios-http.com/docs/api_intro) | 
[react-hook-form](https://react-hook-form.com/docs/useform)

Chat GPT etc.. no está permitido, por lo demás tienes internet a tu entera disposición

## Uso de axios

Librería usada para consumir APIs. Es sencillita, te ahorrará un poco de tiempo a la hora de consumir una API

Cada vez que consumas la APi, debemos importar la libreria

```javascript
import axios from 'axios'
```

## Uso de react-hook-form

Libreria usada para validar formularios, es una librería super chula la verdad. Muy legible y fácil de leer

Ejemplo
```javascript
import { useForm } from 'react-hook-form'
// import { ErrorMessage } from "@hookform/error-message"

import './sass/TodoForm.sass'

import { IoAddSharp } from 'react-icons/io5'
import axios from 'axios'

export default function TodoForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        shouldUseNativeValidation: false,
    })

    const onSubmit = handleSubmit(async (data) => {
        const todo = { id: null, title: data.title, done: false }
        try {
            await axios.post('http://localhost:3000/todos', todo)
            reset()
        } catch (error) {
            console.error(error)
        }
    })

    return (
        <div className="todo-form">
            <h2>Añadir Tarea</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Título</label>
                <input type="text" {...register("title", {
                    required: { value: true, message: 'Campo obligatorio' },
                    minLength: { value: 3, message: 'Debe tener 3 o más caracteres' }
                })} />
                {errors.title && <span>{errors.title.message}</span>}
                {/* <ErrorMessage errors={errors} name="title" /> */}

                <button type="submit">Añadir<IoAddSharp /></button>
            </form>
        </div>
    )
}

```

## Opcional react-icons

Librería que nos ofrece muchos iconos, si deseas añadir algún icono adelante

[Página web](https://react-icons.github.io/react-icons/)

## Requisitos

Componentes obligados

- App
- TodosList
- Todo
- TodoForm

Un objeto Todo tiene 3 propiedades
```javascript
{
id : 0,
title : 'Levantarse de la cama'
done : true
}
```

La información va a salir de un JSON:
```javascript
[
    {
     id : 0,
     title : 'Levantarse de la cama'
     done : true
    },
    {
     id : 1,
     title : 'Ducharse'
     done : true
    },
    {
     id : 2,
     title : 'Hacer 50 flexiones'
     done : false
    }
]
```

TodoForm es un formulario simple, apenas un input para el título y un botón, recuerda hacer las validaciones que creas convenientes

## Autor

Desarrollado por Fran Gregori Tandazo

## Prueba realizada
[Video](https://youtube.com/) de como se realiza