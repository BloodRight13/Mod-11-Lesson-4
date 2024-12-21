import React from 'react';  
import { NavLink } from 'react-router-dom';  
  
const Navigation = () => {  
  return (  
   <nav>  
    <ul>  
      <li>  
       <NavLink to="/" activeClassName="active">  
        Home  
       </NavLink>  
      </li>  
      <li>  
       <NavLink to="/browse-characters" activeClassName="active">  
        Browse Characters  
       </NavLink>  
      </li>  
      <li>  
       <NavLink to="/comics" activeClassName="active">  
        Comics  
       </NavLink>  
      </li>  
    </ul>  
   </nav>  
  );  
};  
  
export default Navigation;