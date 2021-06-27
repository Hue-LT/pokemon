import actionTypes from '../actionTypes'

export const initialState = {
    pokemon: [],
    id: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT":
            
            let poke = {
                name: action.name,
                weight: action.weight,
                height: action.height,
            };
            state.pokemon.push(poke);
            return {
                ...state,
                id: state.id + 1,
            };
        case actionTypes.addToCart:
            return {
                ...state,
                pokemon: [...state.pokemon, action.payload]
            }
        
        default:
            return state;
    }
}

export default cartReducer;