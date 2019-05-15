import React from "react";

const Character = props => {
  return <li>Name: {props.character.name}, Height: {props.character.height}, Birthyear: {props.character.birth_year}</li>;
};

export default Character;
