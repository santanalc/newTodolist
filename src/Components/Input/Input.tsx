import React, { useState, useEffect } from "react";
import "./Input.css";
import {
  MdClose,
  MdSearch,
  MdFormatAlignLeft,
  MdBrightness1,
} from "react-icons/md";

interface Props {
  todo: string[];
  setTodo: React.Dispatch<React.SetStateAction<string[]>>;
}

function Input(props: Props) {
  const [value, setValue] = useState("");
  const { todo, setTodo } = props;

  useEffect(() => {
    setValue("");
  }, [todo]);

  return (
    <div className={"inputGeneral"}>
      <div className={"icon"}>
        <MdFormatAlignLeft fontSize={30}></MdFormatAlignLeft>
      </div>
      <input
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            value && setTodo([...todo, value]);
          }
        }}
        className={"input"}
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
      ></input>

      <button
        className={"button"}
        onClick={() => {
          value && setTodo([...todo, value]);
        }}
      >
        <MdBrightness1 fontSize={20}></MdBrightness1>
      </button>
    </div>
  );
}

export default Input;
