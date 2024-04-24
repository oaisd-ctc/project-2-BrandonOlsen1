import React from 'react';
import { Link, Outlet } from 'react-router-dom'; 

function NavBar() {
    return (
        <>
          <nav>
            <ul>
              
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/School">School</Link>
              </li>
              <li>
                <Link to="/Work">Work</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
    };
export default NavBar;
