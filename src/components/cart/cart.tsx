import "C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/components/menu/menu-info/menu-info.tsx"
import "C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/components/cart/cart.scss"
import React, {useState} from 'react'
import { useNavigate,useLocation } from "react-router-dom";

const Cart = () => {
    const location = useLocation()
    console.log(location)
    var [orderQuantity,setOrderQuantity] = useState(location.state.quantity);
    const locState = location.state;
    const isHiddenCart = () =>{
        if(location.state === null){
            return 'none'
        }
        return 'block'
    }
    const isHiddenText = () =>{
        if(location.state === null){
            return 'block'
        }
        return 'none'
    }
    const handleIncrement = () => {
        setOrderQuantity(orderQuantity + 1)
      }
    const handleDecrement = () => {
    setOrderQuantity(orderQuantity - 1)
    }
    const navigate = useNavigate()
    const submitOrder = () => {
        navigate("/order-status", {
            state: {
                item: locState
            }
        })
    }
    return (<div className="gc-cart">
            <div style = {{display: isHiddenCart()}}>
                <h4>Cart</h4>
                <div className="row">
                    <div className="col-6">Order</div>
                    <div className="col-4">Quantity</div>
                    <div className="col-2">Total</div>
                </div>
                <hr />
                <div className="row mt-2" >
                    <div className="col-6">
                    
                    { location.state.item[0].name }
                    </div>
                    <div className="col-4">
                    <div className="gc-cart__quantity">
                        <div
                        className="gc-cart__quantity-decrease" onClick={() => handleDecrement()}>
                        -
                        </div>
                        <div className="gc-cart__quantity-quantity" >
                            { orderQuantity }
                        </div>
                        <div
                        className="gc-cart__quantity-increase" onClick={() => handleIncrement()}>
                        +
                        </div>
                    </div>
                    </div>
                    <div className="col-2">
                        ₱ { location.state.item[0].price * orderQuantity }
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                    <h4>
                        Price:
                        <small>
                            {/* ₱ {{ totalPrice | number: "1.2-2":"en-US" }} */}
                        </small>
                    </h4>
                    </div>
                </div>
            
    <div className="row mt-4">
      <div className="col-12">
        <div
          className="gc-cart__submit-order"
          onClick={()=>submitOrder()}
        >
          Submit Order
        </div>
        {/* <a className="gc-cart__back" style="font-size: 18px">
          Back to home
        </a> */}
      </div>
    </div>
    </div>
  <div style={{display:isHiddenText()}}>
    <div className="gc-cart__empty-cart">
      <img src="assets/images/cart.svg" alt="Cart" />
      <b className="mt-4">No Items Found!</b>
      <span>Sorry mon ami, no items found in your cart.</span>
    </div>
    </div>
  
    {/* <div className="modal-header">
      <span className="modal-title pull-left">Confirmation</span>
      <button
        type="button"
        className="btn-close close pull-right"
        aria-label="Close"
        
      >
        <span aria-hidden="true" className="visually-hidden">&times;</span>
      </button>
    </div> */}
      {/* <div className="modal-body">
        This will delete the order, continue?
    
        <div className="d-flex justify-content-end mt-5">
            <div className="gc-cart__cancel">Cancel</div>
            <div
            className="gc-cart__continue">
            Continue
            </div>
        </div>
      </div> */}
    </div>
  
    )
}
export default Cart