import AllChefLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/recommend.svg';
import MainLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/main.svg';
import AppetizerLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/appetizer.svg';
import DessertsLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/dessert.svg';
import DrinksLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/drinks.svg';
import React from 'react'
const Menu = () => {
  
  
    return <div className="gc-home">
    <h4>Categories</h4>
    <div className="row">
      <div className="col-sm-6 col-xs-12">
        <a href="/menu/allchef" className="gc-home__card">
          <img src={AllChefLogo} alt="Order" />
          <span>Add All Chef's Recommendation</span>
        </a>
      </div>
      <div className="col-sm-6 col-xs-12">
        <a href="/menu/main" className="gc-home__card">
          <img src={MainLogo} alt="Order" />
          <span>Main Course</span>
        </a>
      </div>
      <div className="col-sm-6 col-xs-12">
        <a href="/menu/appetizer" className="gc-home__card">
          <img src={AppetizerLogo} alt="Order" />
          <span>Appetizers</span>
        </a>
      </div>
      <div className="col-sm-6 col-xs-12">
        <a href="/menu/dessert" className="gc-home__card">
          <img src={DessertsLogo} alt="Order" />
          <span>Desserts</span>
        </a>
      </div>
      <div className="col-sm-6 col-xs-12">
        <a href="/menu/drinks" className="gc-home__card">
          <img src={DrinksLogo} alt="Order" />
          <span>Drinks</span>
        </a>
      </div>
    </div>
  </div>
};

export default Menu