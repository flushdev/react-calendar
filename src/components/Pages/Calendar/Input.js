import React, { useState, useLayoutEffect } from "react";

const Input = (props) => {
  const [defaultFields, setDefaultFields] = useState(props.defaultValue);

  useLayoutEffect(() => {
    setDefaultFields(props.defaultValue);
  }, [props.defaultValue]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        width: "calc(100% - 50px)",
        padding: "0 24px",
        margin: "10px 0",
        height: "29px",
      }}>
      <label
        htmlFor={props.id}
        style={{
          color: "#D6D6D6",
          fontSize: "9px",
          zIndex: "1000",
          position: "absolute",
          marginTop: "-10px",
        }}>
        {props.inputName}
      </label>
      <input
        onChange={(e) => props.handleSetEvent(e, props.id)}
        id={props.id}
        type={props.type}
        maxLength={props.id === "title" ? 30 : 120}
        defaultValue={
          props.id === "date"
            ? defaultFields.date
            : props.id === "time"
            ? defaultFields.time
            : props.id === "title"
            ? defaultFields.title
            : props.id === "description"
            ? defaultFields.description
            : ""
        }
        style={{
          height: "16px",
          width: "100%",
          marginBottom: "20px",
          border: "none",
          borderBottom: "1px solid #43425D80",
          outline: "none",
          textAlign: "bottom",
        }}
      />
    </div>
  );
};

export default Input;
