import React from 'react'
import './product.css'
import loveme from './assets/Loveme.jpg'

export default function Product() {
  return (
    <div className="product">
        <div>
            <img src={loveme}/>
        </div>
        <div className="info">
            <div className="title">Love Me</div>
            <div className="price">$50.00</div>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div className="quantity">
                <div className="quant">Quantity</div>
                <div className="num">{`< 1 >`}</div>
            </div>
            <button className="button">Add to Cart</button>
        </div>
    </div>
  )
}
