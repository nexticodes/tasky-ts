import React from "react";
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (
        <div className="container">
            <div className="todos">
                <span className="todos__heading">
                    Active Tasks
                </span>
            </div>
            <div className="todos remove">
                {
                    todos.map(t =>(
                        <SingleTodo
                            todo={t}
                            todos={todos}
                            key={t.id}
                            setTodos={setTodos}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;
