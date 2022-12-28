import React from 'react';
import Button from './Button';

export default function NavItemForm(props) {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder={props.placeholder}
        aria-label={props.ariaLabel}
      />
      <Button
        text={props.buttonText}
        type="submit"
        className="btn btn-outline-success my-2 my-sm-0"
      />
    </form>
  );
}
