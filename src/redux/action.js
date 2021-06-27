import actionType from './actionTypes'


export function submit(text) {
    return {
        type: actionType.submit,
        text
    };
}

export function addToCart(pokenmon) {
    return {
        type: actionType.addToCart,
        payload: pokenmon
    };
}