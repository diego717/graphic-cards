import React from 'react';

export default function Button(props) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
