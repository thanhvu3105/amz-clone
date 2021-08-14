import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"; 
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"

function Header() {

    const [{cart,user}, disptach] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    
    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src='https://www.pentalic.com/wp-content/uploads/2018/12/Amazon-logo-white-small.png'></img>
            </Link>
          
            
            <div className="header__search">
                <input className="header__searchInput" type="text">
            
                </input>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                {/* If there is no user then we move to login page   */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__option__LineOne"> Hello {user ? user.email : ' Guest'} </span>
                        <span className="header__option__LineTwo"> { user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__option__LineOne"> Returns</span>
                        <span className="header__option__LineTwo"> & Orders</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__option__LineOne"> Your</span>
                    <span className="header__option__LineTwo"> Prime </span>
                </div>
    
                <Link to='/checkout'>
                    <div className="header__option__Basket">
                        <ShoppingCartIcon  />
                        <span className="header__optionLineTwo header__BasketCount">{cart?.length}</span>  
                    </div>
                </Link>
                

            </div>


        </div>
    )
}

export default Header
