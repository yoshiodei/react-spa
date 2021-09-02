import React from 'react';
import './../css/cartPage.css';


const CartPage = () => {
    return (
        <div className="cart-page">
            <h2 className="cart-page_title">Product Cart</h2>
            <div className="cart-page_div">


                <div className="cart-page_card">
                    <img />
                    <div className="cart-page_card_detail-div">
                        <p className="cart-page_card_item_name">Natural Aloevera Herbal Soap</p>
                        <p className="cart-page_card_item_price">Ghc 78.00</p>
                        <div className="cart-page_card_item_quantity">
                            <p>Quantity</p>
                            <div className="cart-page_card_item_quantity_div">
                                <p className="cart-page_card_item_quantity_count">1</p>
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-page_card_remove">
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="cart-page_card">
                    <img />
                    <div className="cart-page_card_detail-div">
                        <p className="cart-page_card_item_name">Natural Aloevera Herbal Soap</p>
                        <p className="cart-page_card_item_price">Ghc 78.00</p>
                        <div className="cart-page_card_item_quantity">
                            <p>Quantity</p>
                            <div className="cart-page_card_item_quantity_div">
                                <p className="cart-page_card_item_quantity_count">1</p>
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-page_card_remove">
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="cart-page_card">
                    <img />
                    <div className="cart-page_card_detail-div">
                        <p className="cart-page_card_item_name">Natural Aloevera Herbal Soap</p>
                        <p className="cart-page_card_item_price">Ghc 78.00</p>
                        <div className="cart-page_card_item_quantity">
                            <p>Quantity</p>
                            <div className="cart-page_card_item_quantity_div">
                                <p className="cart-page_card_item_quantity_count">1</p>
                                <button>+</button>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                    <div className="cart-page_card_remove">
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                
                <div className="line"></div>

            </div>
        </div>
    );
}

export default CartPage;
