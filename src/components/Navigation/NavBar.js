import './NavBar.scss';

const NavBar = () => {
  const foo = 'hello';

  return (
    <nav>
      <div className='logo'>
        <h4> GahPhotography</h4>
      </div>
      <ul className='nav-links'>
        <li>
          <a onClick={foo} href='3' alt=''>
            Services
          </a>
        </li>
        {/* <li><a onClick={foo} href="3" alt="">About</a></li> */}
        <li>
          <a onClick={foo} href='3' alt=''>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
