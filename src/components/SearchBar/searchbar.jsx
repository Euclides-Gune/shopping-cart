import React, {useState, useContext} from "react";
import { CiSearch } from "react-icons/ci";
import './searchbar.css';
import fetchProducts from "../../api/fetchprodutos";
import AppContext from "../../context/AppContext";

const SearchBar = () => {

  const { setProducts } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch =  async (e) => {
    e.preventDefault();

    const products = await fetchProducts(searchValue);
    setProducts(products);
    console.log(products);
    setSearchValue('');

  }

  return(
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
        <input type="search" name="search" id="search" className="search__input" placeholder="Buscar produtos" value={searchValue} required onChange={(e) => {
          setSearchValue(e.target.value);
        }}/>
        <button type="submit" className="search__button"><CiSearch/></button>
    </form>
  );
} 

export default SearchBar;