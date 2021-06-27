import React from 'react';
import './style.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const data = useSelector((state) => state.cart.pokemon);
    return (
        <div className="Navbar">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Link to="/" className="Bag">Pokémon</Link>
                    </div>
                    <div className="col-md-3">
                        <Link
                            to="/mybag"
                            className="Bag"
                        >
                            <div className="">
                                <ShoppingCartIcon />
                                <span>{data.length}</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-1">
                        <Link to="/login" className="Bag">
                            <div>Sign In</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Navbar;
