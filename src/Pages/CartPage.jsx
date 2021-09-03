import React from 'react';
import './../css/cartPage.css';
import { connect } from 'react-redux';
import NavAlt from './../components/NavAlt';
import './../css/nav.css';



const CartPage = ({ items }) => {

    console.log("items", items.length);

    return (
        <>
        <NavAlt />
        <div className="cart-page">
            <h2 className="cart-page_title">Product Cart</h2>
            <div className="cart-page_div">

                {
                    
                  items.map(item =>{
                      return (
                          <>
                            <div className="cart-page_card">
                    <img />
                    <div className="cart-page_card_detail-div">
                        <p className="cart-page_card_item_name">{item.name}</p>
                        <p className="cart-page_card_item_price">Ghc {item.price.toFixed(2)}</p>
                        <div className="cart-page_card_item_quantity">
                            <p>Quantity</p>
                            <div className="cart-page_card_item_quantity_div">
                                <p className="cart-page_card_item_quantity_count">{item.quantity}</p>
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
                          </>
                      );
                  })  
                }
                

            </div>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return { items:state.cart_items }
}




export default connect(mapStateToProps)(CartPage);
