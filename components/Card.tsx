// components/Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  icon: string;
  price: number;
  features: string[];
}

const Card: React.FC<CardProps> = ({ title, icon, price, features }) => {
  return (
    <div className={`mycard ${title.toLowerCase()}`}>
      <div className="title">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <h2>{title}</h2>
      </div>
      <div className="price">
        <h4><sup>$</sup>{price}</h4>
      </div>
      <div className="option">
        <ul>
          {features.map((feature, index) => (
            <li key={index}><i className="fa fa-check" aria-hidden="true"></i> {feature}</li>
          ))}
        </ul>
      </div>
      <a className="btn btn-light btn-block" href="https://codepen.io/collection/XdWJOQ/">Order Now</a>
    </div>
  );
};

export default Card;
