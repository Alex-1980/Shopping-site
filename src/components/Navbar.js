import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['Women', 'Divided', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', 'Sustainability'];
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
    
  }

  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
      {authenticate ? (
        <div className='login-button' onClick={() => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} />
          <div>Logout</div>
        </div>
      ) : (
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>Login</div>
        </div>
      )}
      </div>
      <div className='nav-section'>
        <Link to = '/'>
          <img width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png' />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='search products' onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
