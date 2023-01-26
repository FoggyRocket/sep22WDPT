// Function component
// export default function Navbar....
// {} = props
function Navbar({user, ...props }) {
  console.log("que son los props Navbar", user, props.obj, props.arrays);
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        IconoHome
      </a>
      <div className="navigation-menu">
        <ul>
          {
            // condicion ? true : false
            user ?
          <>
            <li>
                <a href="">Profile</a>
            </li>
            <li>
                <a href="">Logout</a>
            </li>
          </>  
          :
          <> 
            <li>
                <a href="">Login</a>
            </li>
            <li>
                <a href="">Signup</a>
            </li>
          </>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
