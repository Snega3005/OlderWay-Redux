import {createStore} from 'redux';

const initialState = {
    user:{
        username: 'AK',
        balance: 25000
    }
}

export const addMoney = (amt) => ({
    type: 'addMoney',
    payload: amt
})

export const debitMoney = (payload) => ({
    type: 'debitMoney',
    payload: payload
})

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'addMoney':
            return {
                user:{
                    username: state.user.username,
                    balance: state.user.balance + action.payload
                }
            };
        case 'debitMoney':
            return {
                user:{
                    username: state.user.username,
                    balance: state.user.balance - action.payload
                }
            };
        default: {
            return state;
        }
    }
}

const store = createStore(reducer)
export default store;