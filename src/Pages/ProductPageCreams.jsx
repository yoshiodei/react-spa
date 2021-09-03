import { useState } from 'react';
import './../css/productPage.css';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart } from './../Action/action';
import NavAlt from '../components/NavAlt';
import './../css/nav.css';

const ProductPageCreams = ({creams, cart_items, addToCart}) => {
    let {id} = useParams();
    
    let [item] = creams.filter(item=>item.id == id);

    let [quantity, setQuantity] = useState(1);

    const handleDecrease = () =>{
        if(quantity>1){
            return setQuantity(quantity-1);
        }    
    }

    let price = quantity * item.price;

    const handleAdd = () => {
        let newItem = {
            name: item.name,
            price: price,
            quantity: quantity,
            id: item.id
        }

        let isInCart = cart_items.some(newItem=> newItem.id == item.id);

        if(!isInCart)addToCart(newItem)

    }

    return (
        <>
        <NavAlt />
        <div className="product-page">
            <div className="product-page_div">
                <img />
                <div className="product-page_inner_div">
                    <h3 className="product-page_item_name">{item.name}</h3>
                    <p className="product-page_item_price">Ghc {price.toFixed(2)}</p>
                    <h5 className="product-page_item_quantity_title">Quantity</h5>
                    <div className="product-page_item_quantity_div">
                         <div className="product-page_item_quantity_inner_div">
                             <button className="product-page_item_quantity_btn_left" onClick={()=>setQuantity(quantity+1)}>+</button>
                             <p>{ quantity }</p>
                             <button className="product-page_item_quantity_btn_right" onClick={handleDecrease}>-</button>
                         </div>
                         <button className="product-page_item_quantity_btn" onClick={handleAdd}>Add to cart</button>
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
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        creams:state.creams,
        cart_items:state.cart_items
    };
}

const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductPageCreams);
