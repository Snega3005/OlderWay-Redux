import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState: {
        username: "Snega",
        balance: 25000
    },
    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
        },
        debitMoney: (state, action) => {
            state.balance -= action.payload;
        }
    }
});

//Exporting the action
export const { addMoney, debitMoney} = userSlice.actions;

//Correctly setting up the reducer in the store
const store = configureStore ({
    reducer: {user: userSlice.reducer}
});

export default store;