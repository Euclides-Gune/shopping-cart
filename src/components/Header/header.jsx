import React from "react";
import SearchBar from "../SearchBar/searchbar";
import CartButton from "../CartButton/cartbutton";
import './header.css';

const Header = () => {
  return(
    <header className="header">
      <div className="container" >
        
      <SearchBar />
      <CartButton />
      </div>
    </header>
  );
}

export default Header;