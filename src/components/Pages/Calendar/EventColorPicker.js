import React from "react";
import { eventColors } from "./mock/inputFields";

const EventColorPicker = (props) => {
  return eventColors.map((color) => (
    <div
      key={color}
      style={{
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        marginLeft: "5px",
        background: color,
        cursor: "pointer",
      }}
      onClick={props.background}
    />
  ));
};

export default EventColorPicker;
