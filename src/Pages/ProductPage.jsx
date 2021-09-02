import React from 'react';
import './../css/productPage.css';

const ProductPage = () => {
    return (
        <div className="product-page">
            <div className="product-page_div">
                <img />
                <div className="product-page_inner_div">
                    <h3 className="product-page_item_name">Natural Herbal Soap</h3>
                    <p className="product-page_item_price">Ghc 55.00</p>
                    <h5 className="product-page_item_quantity_title">Quantity</h5>
                    <div className="product-page_item_quantity_div">
                         <div className="product-page_item_quantity_inner_div">
                             <button className="product-page_item_quantity_btn_left">+</button>
                             <p> 1 </p>
                             <button className="product-page_item_quantity_btn_right">-</button>
                         </div>
                         <button className="product-page_item_quantity_btn">Add to cart</button>
                    </div>
                    <div className="product-page_item_description_div">
                        <h5>Description</h5>
                        <div className="line"></div>
                        <p>quo nobis ipsum! Dolore et aspernatur, facere. Soluta tempora reiciendis nostrum repellendus accusantium archite que perspiciatis magni illum temporibus.</p>
                        <span className="break"></span>
                        <p>aboriosam animi facilis labore saepe ad voluptatem dicta quae quam similique temporibus corporis molestias magni enim. Sint culpa ctus consectetur ad incidunt</p>
                        <span className="break"></span>
                        <p> molestias magni enim. Sint culpa perferendis cumque quasi delectus consectetur ad incidunt</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
