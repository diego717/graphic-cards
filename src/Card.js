import React from 'react';
import Button from './Button';

export default function Card(props) {
  return (
    <div className="card-container" style={{ width: '18rem' }}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">Product Description: {props.description}</p>
        <h5>${props.price}</h5>
        <Button
          text="Buy"
          onClick={props.addItem}
          className="btn btn-primary"
        />
      </div>
    </div>
  );
}
