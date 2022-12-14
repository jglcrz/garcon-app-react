import 'bootstrap/dist/css/bootstrap.min.css';
import menuLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/menu.svg';
import orderLogo from 'C:/Users/jasminegale.cruz/Documents/Jam/Projects/app4/garcon-main/src/assets/images/order.svg';
import './home.scss'
const Home = () => {
    return <div className="gc-home">
    <div className="row">
      <div className="col-sm-6 col-xs-12">
        <a href="/order-status" className="gc-home__card">
          <img src={orderLogo} alt="Order" />
          <span>Order status</span>
        </a>
      </div>
  
      <div className="col-sm-6 col-xs-12">
        <a href="/menu" className="gc-home__card">
          <img src={menuLogo} alt="Menu" />
          <span>Menu</span>
        </a>
      </div>
    </div>
  </div>
  
};

export default Home