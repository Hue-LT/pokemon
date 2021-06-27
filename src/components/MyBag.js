
import Navbar from './Navbar';
import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
import * as action from "../redux/action";
import { useSelector } from 'react-redux';
import './Card/style.css';

function MyBag() {
    const data = useSelector((state) => state.cart.pokemon);
    console.log(data);

    return (
        <>
            <Navbar />
            <div className="mybag">
                <div className="">
                    {data?.length === 0 ? (
                        <div className="para">
                            <h2>Your Bag is empty</h2>
                            <p>
                                You have no items in your Bag.
                    </p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="para">Your Bag</h2>
                            <div>
                                <div className="container table">
                                    <div class="row para">
                                        <div className="col-md-4">
                                            Name
                                        </div>
                                        <div className="col-md-4">
                                            Weight
                                        </div>
                                        <div className="col-md-4">
                                            Height
                                        </div>
                                    </div>
                                </div>
                                <div class="container table">
                                    {data.map(item => {
                                        return (
                                            <div className="container">
                                                <div class="row">
                                                    <div className="col-md-4">
                                                        {item.name}
                                                    </div>
                                                    <div className="col-md-4">
                                                        {item.weight}
                                                    </div>
                                                    <div className="col-md-4">
                                                        {item.height}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    )
                    }
                </div>
            </div>

        </>

    );
}
function mapStateToProps(state) {

    return {
        dataPokemon: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(action, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBag);