import "C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/components/order-status/order-status.scss"
import React, {useState} from 'react'
import { useNavigate,useLocation } from "react-router-dom";

const OrderStatus = () => {
    const location = useLocation()
    console.log(location.state)
    var locState = location.state
    const isHidden = () =>{
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
    const navigate = useNavigate()
    const billOut = () => {
        alert("Billed out!");
        navigate("/", {
            state: {
                item: null
            }
        })
    }

    return(<div className="gc-order">
                <h4>Orders</h4>
                <div style={{display:isHidden()}}>
                <div className="row" >
                <div className="col-12">
                    <div className="gc-order__card">
                    <b>Order </b>
                    <span> December 15, 2022 </span>
                        <span className="mt-1">
                        <b>{ locState.item.quantity }</b> { locState.item.item[0].name } &nbsp;
                        { locState.item.quantity * locState.item.item[0].price }
                        </span>
                        <div className="gc-order__progress">
                        <div className="row">
                            {/* <div className="col-6">
                            <small>Prep Time</small>
                            <div className="gc-order__progress-item">
                                <div
                                className="gc-order__progress-thumb"
                                ></div>
                            </div>
                            </div> */}
                            {/* <div className="col-6">
                            <small>Cooking Time</small>
                            <div className="gc-order__progress-item">
                                <div
                                className="gc-order__progress-thumb"></div>
                            </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="row mt-4">
                <div className="col-12">
                    <h5>
                    Price:
                    <small>₱ { locState.item.price }</small>
                    </h5>
                    <h5>
                    Service Charge:
                    <small>
                        ₱ { locState.item.price * .10  }
                    </small>
                    </h5>
                    <h5>
                    VAT 12%:
                    <small>₱ { locState.item.price * .12 }</small>
                    </h5>

                    <h4>
                    Total Amount:
                    <small>₱ { (locState.item.price) + (locState.item.price * .10) + (locState.item.price * .12) }</small>
                    </h4>
                </div>
                </div>

            <div className="row mt-4">
                <div className="col-12">
                <a className="gc-order__submit-order" onClick={() => billOut()}>
                    Bill out
                </a>
                <a className="gc-order__back" >
                    Back to home
                </a>
                </div>
            </div>
            </div>

            <div className="gc-order__empty-cart" style={{display:isHiddenText()}}>
                <img src="assets/images/order.svg" alt="Cart" />
                <b className="mt-4">No Orders Yet!</b>
                <span>Sorry mon ami, you have no orders.</span>
            </div>
            </div>)
}

export default OrderStatus