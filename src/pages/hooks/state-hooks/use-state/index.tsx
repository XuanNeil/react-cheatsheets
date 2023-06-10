import React, { ChangeEvent, useState } from "react"

/**
 * Bài toán: Làm 1 danh sách todo gồm thêm, sửa xóa todo.
 *  B1: Viết component AddToDo gồm props là fn addToDo(title: string) => void
 *  B2: Viết component Todo gồm props là todo - {id: number, title: string, completed: boolean}, onChange(nextTodo: {id: number, title: string, completed: boolean}), onDelete(idTodo) 
 *  B3: Viết component ListTodo gồm props là 1 todos[], onChange(nextTodo), onDelete(idTodo)
 *  B4. Viết TaskToDo và logic xử lý các fn handleAddToDo, handleChangeToDo, handleDeleteToDo
 */


const initialTodos = [
    { id: 1, title: 'Buy milk', completed: true },
    { id: 2, title: 'Eat tacos', completed: false },
    { id: 3, title: 'Brew tea', completed: false }
]

let nextId = 4;

const TaskToDo = () => {

    const [todos, setTodos] = useState(initialTodos)

    const handleAddTodo = (title: string) => {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title,
                completed: false
            }
        ])
    }

    const handleChangeTodo = (nextTodo: any) => {
        const newTodo = todos.map((todo) => {
            if (todo.id === nextTodo.id) return nextTodo
            return todo
        })
        setTodos(newTodo)
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <AddToDo onAddTodo={handleAddTodo} />
            <ListTodo todos={todos} onChangeTodo={handleChangeTodo} onDelete={handleDeleteTodo} />
        </>
    )
}

const AddToDo: React.FC<{ onAddTodo: (title: string) => void }> = ({ onAddTodo }) => {

    const [title, setTitle] = useState<string>('')

    const handleChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleAddTodo = () => {
        setTitle('')
        onAddTodo(title)
    }

    return (
        <div>
            <input type="text" placeholder="Add Todo" value={title} onChange={handleChangeTodo} />
            <button onClick={() => handleAddTodo()}>Add</button>
        </div>
    )
}

const ListTodo = ({ todos, onChangeTodo, onDelete }: any) => {
    return (
        <ul>
            {todos.map((todo: any) => (
                <li key={todo.id}>
                    <ToDo todo={todo} onChange={onChangeTodo} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}

const ToDo = ({ todo, onChange, onDelete }: any) => {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    let contentTitle

    if (isEditing) {
        contentTitle = <>
            <input value={todo.title} onChange={(e) => onChange({ ...todo, title: e.target.value })} />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    } else
        contentTitle = <>
            {todo.title}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>

    return (
        <>
            <input type="checkbox" checked={todo.completed} onChange={(e) => onChange({
                ...todo,
                completed: e.target.checked
            })} />
            {contentTitle}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
    )
}
export default TaskToDo