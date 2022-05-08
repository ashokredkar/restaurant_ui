import React from 'react';
import './ExploreItem.css';

const ExploreItem = ({ img, name, price }) => {
    return (
        <div className="exploreItem">
            <h2>{name}</h2>
            <div className="menuContent">
                <div className="left">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vtenetur recusandae perferendis sunt laudantium!</p>
                </div>
                <img src={img} alt="menuItem" />
                <div className="right">
                    <span>${price}</span>
                    <div className='info'>
                        <div className="quantity">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                    </div>
                    <button className='order-btn'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default ExploreItem