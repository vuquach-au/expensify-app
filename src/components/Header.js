import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">

                <NavLink className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </NavLink>

                <button className="button button--links" onClick={startLogout}>Logout</button>
            </div>
        </div>
        
    </header>
);

 const mapDispatchToProps = (dispatch) => ({
     startLogout: () => dispatch(startLogout())
 })

 export default connect(undefined, mapDispatchToProps)(Header);
//export default Header;