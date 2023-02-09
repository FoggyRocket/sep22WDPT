import "./styles.css"
import { Link,NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav>
        <div className="nav-container">
          {/* <Link to="/">Home</Link> */}
          <NavLink 
            //className={({isActive})=>isActive ? "selected" : ""}
            to="/"
            >
              Home
          </NavLink>
          <NavLink 
            className={({isActive})=>isActive ? "selected" : ""}
            to="/signup"
            >
              Signup
          </NavLink>
          <NavLink 
            className={({isActive})=>isActive ? "selected" : ""}
            to="/profile"
            >
              Profile
          </NavLink>
        </div>
      </nav>
    );
  };
  
  export default Navbar;