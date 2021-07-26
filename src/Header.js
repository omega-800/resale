import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
        <nav className="header">
            <div className="header__top">
                <Link to="/" className="header__topLink">
                    <image className="header__logo" src={process.env.PUBLIC_URL + "/logo512.png"} alt="logo" />
                    <h1 className="header__title">Resale</h1>
                </Link>
            </div>
            <div className="header__navItems">
                <div className="header__search header__link">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav"> 
                    <Link to={""} className="header__link">
                        <div onClick={""} className="header__option">
                            <span className="header__optionLineOne">Hello {}</span>
                            <span className="header__optionLineTwo">{}</span>
                        </div>
                    </Link>
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo">and Orders</span>
                        </div>
                    </Link>
                </div>
                <Link to="/checkout" className="header__link" >
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__shoppingBasketIcon" />
                        <span className="header__optionLineTwo header__productCount">{}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;