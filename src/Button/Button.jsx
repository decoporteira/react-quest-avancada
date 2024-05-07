import React from "react";

const Button = (props) => {
  const { title, onClick } = props;

  return (
    <button className="carregar" onClick={onClick}>{ title }</ button>
  )
}

export default Button;