import { createSlice } from "@reduxjs/toolkit";


// dummy Data
const initialState = {
    users: [
        {
            id: 1,
            first_name: "damon",
            last_name: "salvatore",
            email: "damondamon@gmail.com",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            id: 2,
            first_name: "Honey",
            last_name: "Patel",
            email: "honeypatel@gmail.com",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            id: 3,
            first_name: "Elena",
            last_name: "Gilbert",
            email: "elenaaapatel@gmail.com",
            avatar: "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            id: 4,
            first_name: "Bonny",
            last_name: "Benette",
            email: "bonny@xyz.com",
            avatar: "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            id: 5,
            first_name: "Helly",
            last_name: "Patel",
            email: "stefan@gmail.cpm",
            avatar: "https://reqres.in/img/faces/5-image.jpg"
        },

        {
            id: 6,
            first_name: "Prince",
            last_name: "Patel",
            email: "stefanElena@gmail.cpm",
            avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            id: 7,
            first_name: "Ayush",
            last_name: "Thakur",
            email: "ayushThakur@gmail.cpm",
            avatar: "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            id: 8,
            first_name: "sweet",
            last_name: "heart",
            email: "stefanElena@gmail.cpm",
            avatar: "https://reqres.in/img/faces/9-image.jpg"
        },
    ],
    hoveredUser: null
};



const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        sethoveredUser(state, action) {
            state.hoveredUser = action.payload;
        }
    },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
