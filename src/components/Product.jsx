import React from 'react';
import './../css/products.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Product = ({ items }) => {

    const handleClick = (e) => {
        console.log("it has stopped propagation");
       
    }


    return (
        <section className="products">
            <h2>Products</h2>
            <div className="products_div">
                <div className="products_item_div">
                    <h3 className="products_item_title">Body Creams &amp; Lotions</h3>
                    <div className="products_item_inner_div">
                        {items.creams.map(cream=>{
                            return (
                                <div className="products_item_card" key={cream.id}>
                                    <img />
                                    <div className="products_item_card_div">
                                        <Link to={`/product/creams/${cream.id}`}>
                                            <p className="products_item_card_item_name">{cream.name}</p>
                                        </Link>    
                                        <p className="products_item_card_item_price">Ghc{cream.price}</p>
                                        <button className="products_item_card_item_button"
                                        onClick={handleClick} >Add to cart</button>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
                <div className="products_item_div">
                    <h3 className="products_item_title">Oils &amp; Perfume</h3>
                    <div className="products_item_inner_div">
                        {items.oils.map(oil=>{
                            return (
                                <div className="products_item_card" key={oil.id}>
                                    <img />
                                    <div className="products_item_card_div">
                                        <Link to={`/product/oils/${oil.id}`}>
                                            <p className="products_item_card_item_name">{oil.name}</p>
                                        </Link>    
                                        <p className="products_item_card_item_price">Ghc{oil.price}</p>
                                        <button className="products_item_card_item_button"
                                        onClick={handleClick} >Add to cart</button>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
                <div className="products_item_div">
                    <h3 className="products_item_title">Oragnic &amp; Herbal Soaps</h3>
                    <div className="products_item_inner_div">
                    {items.soaps.map(soap=>{
                            return (
                                <div className="products_item_card" key={soap.id}>
                                    <img />
                                    <div className="products_item_card_div">
                                        <Link to={`/product/soaps/${soap.id}`}>
                                            <p className="products_item_card_item_name">{soap.name}</p>
                                        </Link>    
                                        <p className="products_item_card_item_price">Ghc{soap.price}</p>
                                        <button className="products_item_card_item_button"
                                        onClick={handleClick} >Add to cart</button>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return { items: state }
}

export default connect(mapStateToProps)(Product);
