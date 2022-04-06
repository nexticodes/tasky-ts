import React from "react";
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input
                type="input"
                onChange={
                    (e) => setTodo(e.target.value)
                }
                placeholder="Enter a Task!"
                className="input__box"
                value={todo}
            />
            <button className="input_submit">Go</button>
        </form>
    );
};

export default InputField;
