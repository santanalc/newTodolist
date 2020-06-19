import React, { useState } from "react";
import "./Home.css";
import Input from "../../Components/Input/Input";
function Home() {
  const [todo, setTodo] = useState<string[]>([]);
  const [checkedTodo, setCheckedTodo] = useState<number[]>([]);

  console.log("OI");
  return (
    <div className={"body"}>
      <div className={"panel"}>
        <Input todo={todo} setTodo={setTodo} />
        <div className={"list-check"}>
          {todo.map((elem, index) => (
            <label className={checkedTodo.includes(index) ? "risk" : ""}>
              <input
                className={"check"}
                type="checkbox"
                checked={checkedTodo.includes(index)}
                onChange={() => {
                  if (checkedTodo.includes(index)) {
                    setCheckedTodo(checkedTodo.filter((elem) => elem != index));
                  } else {
                    setCheckedTodo([...checkedTodo, index]);
                  }
                }}
              />

              {elem}
              <button
                onClick={() => {
                  setTodo(todo.filter((td) => td != elem));
                }}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
