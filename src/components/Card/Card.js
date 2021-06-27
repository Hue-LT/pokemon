import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import typeColors from '../../helpers/typeColors'
import './style.css';
import Modal from 'react-modal';
import RemoveIcon from '@material-ui/icons/Remove';
import { addToCart } from '../../redux/action'
import { useDispatch } from 'react-redux';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

function Card(props) {
    const { pokemon, pokemonData, index, namePokemon = () => { } } = props
    const [checkCatchSucces, setCheckCatchSucces] = useState(false)

    const dispatch = useDispatch();

    const handleCheckCatchSuccess = () => {
        const catchPokemon = Math.random();
        if (catchPokemon >= 0.5) {
            setCheckCatchSucces(true)
        } else {
            setCheckCatchSucces(false)
            alert("You have failed to catch pokemon!");
        }
    }
    const handleChangeName = (e) => {
        props.setNamePokemon(e.target.value)
    }
    const handleSubmit = (e) => {
        pokemonData[index].name = namePokemon
        const data = {
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
        }
        dispatch(addToCart(data))
        setIsOpen(false);
    }
    var subtitle;
    const [detailIsOpen, setIsOpen] = React.useState(false);
    function openDetail() {
        props.setNamePokemon(pokemon.name)
        setIsOpen(true);
    }
    function afterOpenDetail() {
        subtitle.style.color = '#f00';
    }

    function closeDetail() {
        setIsOpen(false);
    }

    return (
        <div className="Card" key={props.id}>
            <div className="container">
                <div className="">
                    <div className="Card__img">
                        <img src={pokemon.sprites.front_default} alt="" />
                    </div>
                    <div className="Card__name">
                        {pokemon.name}
                    </div>
                    <div className="Card__types">
                        {
                            pokemon.types.map(type => {
                                return (
                                    <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                        {type.type.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="Card__info">
                        <div className="Card__data Card__data--weight">
                            <p className="title">Weight</p>
                            <p>{pokemon.weight}</p>
                        </div>
                        <div className="Card__data Card__data--weight">
                            <p className="title">Height</p>
                            <p>{pokemon.height}</p>
                        </div>
                        <div className="Card__data Card__data--ability">
                            <p className="title">Ability</p>
                            <p>{pokemon.abilities[0].ability.name}</p>
                        </div>

                        <div className="details">
                            <button className="cat" onClick={openDetail}>Details</button>
                            <Modal
                                isOpen={detailIsOpen}
                                onAfterOpen={afterOpenDetail}
                                onRequestClose={closeDetail}
                                style={customStyles}
                                contentLabel="Modal">
                                <div>
                                    <div class="modal-detail">
                                        <header class="container">
                                            <div className="row">
                                                <div className="col-md-10"><h2 ref={_subtitle => (subtitle = _subtitle)}>Pokémon</h2></div>
                                                <div className="col-md-2">
                                                    <button className="cat" onClick={closeDetail}><RemoveIcon /></button>
                                                </div>
                                            </div>
                                            <h2 class="modal-name">
                                                {!checkCatchSucces ?
                                                    (
                                                        <div className="Card__name">
                                                            {pokemon.name}
                                                        </div>
                                                    ) : (
                                                        <div className='input__name'>
                                                            <input class="input" type="text"
                                                                value={namePokemon}
                                                                onChange={(e) => handleChangeName(e)}
                                                            />
                                                        </div>
                                                    )
                                                }
                                            </h2>
                                        </header>
                                        <div class="container">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <img src={pokemon.sprites.front_default} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <img src={pokemon.sprites.back_default} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <img src={pokemon.sprites.front_shiny} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="">
                                                        <img src={pokemon.sprites.back_shiny} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="Card__data Card__data--weight">
                                                        <p className="title">Weight</p>
                                                        <p>{pokemon.weight}</p>
                                                    </div>
                                                    <div className="Card__data Card__data--weight">
                                                        <p className="title">Height</p>
                                                        <p>{pokemon.height}</p>
                                                    </div>
                                                    <div className="Card__data Card__data--ability">
                                                        <p className="title">Ability</p>
                                                        <p>{pokemon.abilities[0].ability.name}</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 Card__data Card__data--stat">
                                                    <p className="title">Stats</p>
                                                    <p>{pokemon.stats[0].stat.name}</p>
                                                    <p>{pokemon.stats[1].stat.name}</p>
                                                    <p>{pokemon.stats[2].stat.name}</p>
                                                    <p>{pokemon.stats[3].stat.name}</p>
                                                    <p>{pokemon.stats[4].stat.name}</p>
                                                    <p>{pokemon.stats[5].stat.name}</p>
                                                </div>
                                            </div>


                                            <div className="nut">
                                                <button type="button"
                                                    onClick={handleCheckCatchSuccess}
                                                    className="cat"
                                                    disabled={checkCatchSucces}
                                                    style={checkCatchSucces ? { opacity: 0.3 } : {}}
                                                >Catch Pokemon</button>
                                                {checkCatchSucces && (
                                                    <button
                                                        type='submit'
                                                        className="cat"
                                                        onClick={handleSubmit}
                                                    >Submit
                                                    </button>
                                                )}
                                            </div>
                                            <p class="help">Need <Link to="#" >help?</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default React.memo(Card);
