import React from 'react';
import product_card from '../data/productData';


const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className="cardView" key={item.id}>
            <div className="cardView_img">
                <img src={item.thumb} />
            </div>
            <div className="cardView_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="cardView_price">{item.price}<span>{item.currency}</span></p>
                <div className="cardView_btn">Add to cart</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            <h3>DSLR CAMERAS</h3>
            {listItems}
        </div>
    )
}
export default MainContent;