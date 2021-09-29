import React from "react";
import "./Btn.css"

const Btn = ({ children, onClick }) => {
  return <button onClick={onClick} className="button">{children}</button>;
};

export default Btn;
