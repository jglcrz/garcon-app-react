import { Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import useBreadcrumbs from "use-react-router-breadcrumbs";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCartDashFill, BsCardList } from 'react-icons/bs';

  
  const routes = [
    { path: "/", breadcrumb: "Home" },
    { path: "/menu", breadcrumb: "Menu" }
  ];
const Navbar = (props) => {
  const breadcrumbs = useBreadcrumbs(routes);
  const tableNo = 10;
  // debugger
    return <div className="gc-app">
        <header>
        <nav className="gc-app__navbar">
            <div className='d-flex align-items-center'>
            <div className='gc-app__navbar-brand'>
                Gc
            </div>
            <span className="gc-app__navbar-title">Garcon</span>
            </div>
            <Dropdown >
              <Dropdown.Toggle className='dropdown-toggle gc-app__navbar-dropdown' id="button-basic" aria-controls="dropdown-basic">
                Table # {tableNo} <span className='caret'/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="/cart"><BsFillCartDashFill/> Cart</Dropdown.Item>
                <Dropdown.Item href="/order-status"><BsCardList/> Order Status</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </nav>
        <div className='gc-app__sub-navbar'>
          <nav className="breadcrumb">
          {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link key={match.pathname} to={match.pathname}>
          {breadcrumb} /
        </Link>
      ))}
          </nav>
        </div>
    </header>
    </div>;
};

export default Navbar;