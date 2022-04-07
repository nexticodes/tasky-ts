import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            <ul>
                {todos.map((t) => (
                    <li>{t.todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
