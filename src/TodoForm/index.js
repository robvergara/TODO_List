import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    const onCancel = ()=>{
        setOpenModal(false);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange = {onChange}
                placeholder="cortar la cebolla"
            />
            <div className="ToDoForm-buttonContainer">
                <button
                    type="button"
                    className="ToDoForm-button ToDoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="ToDoForm-button ToDoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};