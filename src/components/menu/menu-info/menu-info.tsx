import { useParams, useNavigate } from "react-router-dom";
import menu from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/data/menu.json';
import Cart from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/components/cart/cart'
import React , {useState, createContext} from "react";
import "./menu-info.scss";

const MenuInfo = () => {
    //handle orderQuantity increment and decrement
    var [orderQuantity,setOrderQuantity] = useState(0);
    
    const handleIncrement = () => {
        setOrderQuantity(orderQuantity + 1)
      }
    const handleDecrement = () => {
    setOrderQuantity(orderQuantity - 1)
    }

    //handle filtering of menu depending on id
    const { id } = useParams();
    const isInclude = (value) => {
        if(value.id == id){
            return true;
        }
    };
    var menuItem = menu.filter(isInclude);

    //handle add to cart
    var [item, setItem] = useState(menuItem)
    const navigate = useNavigate()
    const addToCart = () => {
        console.log("Add to cart " + menuItem[0].name);
        navigate("/cart", {
            state: {
                item: menuItem,
                quantity: orderQuantity,
                price: orderQuantity * menuItem[0].price
            }
        })
    }
      

    return(<div className="gc-menu">
            <h4>Menu Details</h4>
            <div className="row">
                <div className="col-12">
                <div className="gc-menu__card">
                    <div
                    className="gc-menu__card-image"
                    style={{ 
                        backgroundImage: 'url(assets/images/menu/' + menuItem[0].pictureUrl + ')'
                      }}>
                    <img
                        src="assets/images/recommend.svg"
                        alt=""
                    />
                    </div>
                    <div className="gc-menu__card-footer">
                    <span>{ menuItem[0].name }</span>
                    <small> { menuItem[0].preparationTime } mins prep time </small>
                    <small> { menuItem[0].cookingTime } mins cooking time </small>
                    <small> ₱ { menuItem[0].price }.00 </small>
                    </div>
                </div>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                <div className="gc-menu__quantity">
                    <div className="gc-menu__quantity-decrease" onClick={() => handleDecrement()}>
                    -
                    </div>
                    <div className="gc-menu__quantity-quantity">{orderQuantity}</div>
                    <div className="gc-menu__quantity-increase" onClick={() => handleIncrement()}>
                    +
                    </div>
                </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                <h4>
                    Price:
                    <small>{menuItem[0].price * orderQuantity}</small>
                </h4>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12">
                <div className="gc-menu__add-to-cart" onClick={() => addToCart()}>
                    Add to cart
                    </div>
                <a href="/menu" className="gc-menu__back">
                    Back to menu
                </a>
                </div>
            </div>
        </div>
    );
}

export default MenuInfo;

// export default function MenuInfo(){
    
//     //handle orderQuantity increment and decrement
//     var [orderQuantity,setOrderQuantity] = useState(0);
    
//     const handleIncrement = () => {
//         setOrderQuantity(orderQuantity + 1)
//       }
//     const handleDecrement = () => {
//     setOrderQuantity(orderQuantity - 1)
//     }

//     //handle filtering of menu depending on id
//     const { id } = useParams();
//     const isInclude = (value) => {
//         if(value.id == id){
//             return true;
//         }
//     };
//     var menuItem = menu.filter(isInclude);

//     //handle add to cart
//     const ItemToAdd = ({
//         itemQuantity,
//         itemPrice
//     }) => {
//         const addToCart = (id) => {
//             itemQuantity(orderQuantity)
//             itemPrice(menuItem[0].price * orderQuantity)
//         }
//     }
      

//     return(<div className="gc-menu">
//             <h4>Menu Details</h4>
//             <div className="row">
//                 <div className="col-12">
//                 <div className="gc-menu__card">
//                     <div
//                     className="gc-menu__card-image"
//                     style={{ 
//                         backgroundImage: 'url(assets/images/menu/' + menuItem[0].pictureUrl + ')'
//                       }}>
//                     <img
//                         src="assets/images/recommend.svg"
//                         alt=""
//                     />
//                     </div>
//                     <div className="gc-menu__card-footer">
//                     <span>{ menuItem[0].name }</span>
//                     <small> { menuItem[0].preparationTime } mins prep time </small>
//                     <small> { menuItem[0].cookingTime } mins cooking time </small>
//                     <small> ₱ { menuItem[0].price }.00 </small>
//                     </div>
//                 </div>
//                 </div>
//             </div>

//             <div className="row mt-2">
//                 <div className="col-12">
//                 <div className="gc-menu__quantity">
//                     <div className="gc-menu__quantity-decrease" onClick={() => handleDecrement()}>
//                     -
//                     </div>
//                     <div className="gc-menu__quantity-quantity">{orderQuantity}</div>
//                     <div className="gc-menu__quantity-increase" onClick={() => handleIncrement()}>
//                     +
//                     </div>
//                 </div>
//                 </div>
//             </div>

//             <div className="row mt-4">
//                 <div className="col-12">
//                 <h4>
//                     Price:
//                     <small>{menuItem[0].price * orderQuantity}</small>
//                 </h4>
//                 </div>
//             </div>

//             <div className="row mt-2">
//                 <div className="col-12">
//                 <div className="gc-menu__add-to-cart" onClick={() => addToCart()}>
//                     Add to cart
//                     </div>
//                 <a href="/menu" className="gc-menu__back">
//                     Back to menu
//                 </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

