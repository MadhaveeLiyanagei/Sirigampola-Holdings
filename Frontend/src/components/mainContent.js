import React from 'react';

const MainContent = ({productItem, handleAddProduct}) => {

    // to check whether data is passed
    console.log("test data"+ productItem);
    
    return (
        <div class="main_content">
            <h3>CAMERA EQUIPMENT</h3>
            {productItem.map((productItem) =>
            <div className="cardView" key={productItem.id}>
                <div className="cardView_img">
                    <img src={productItem.thumb} />
                </div>
                <div className="cardView_header">
                    <h2>{productItem.product_name}</h2>
                    <p>{productItem.description}</p>
                    <p className="cardView_price">{productItem.price}<span>{productItem.currency}</span></p>
                    <div>
                        <button className="cardView_btn" onClick={() => handleAddProduct(productItem)}>Checkout Order</button>
                    </div>

                </div>
            </div>

            )}

        </div>
    );

};
export default MainContent;











//Old Code
// const MainContent = () => {

//     console.log("test data "+ product_card);

//     const listItems = product_card.map((item) =>
//         <div className="cardView" key={item.id}>
//             <div className="cardView_img">
//                 <img src={item.thumb} />
//             </div>
//             <div className="cardView_header">
//                 <h2>{item.product_name}</h2>
//                 <p>{item.description}</p>
//                 <p className="cardView_price">{item.price}<span>{item.currency}</span></p>
//                 <div>
//                     <button className="cardView_btn" >Checkout Order</button>
//                 </div>

//             </div>
//         </div>

//     );


//     return (
//         <div class="main_content">
//             <h3>DSLR CAMERAS</h3>
//             {listItems}
//         </div>
//     )

// }
// export default MainContent;

