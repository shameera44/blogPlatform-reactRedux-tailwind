
import { createSlice } from "@reduxjs/toolkit";

const storedUsers = JSON.parse(localStorage.getItem('users'))
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

const initialState = {
    users: storedUsers || [],
    loggedinUser: currentUser || null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action) => {

            const newUser = action.payload
            const existUser = state.users.find(

                 user => user.email === newUser.email
            )

            if (!existUser) {
                state.users.push(newUser)
                localStorage.setItem('users', JSON.stringify(state.users))
            }

            else {
                alert("user already exist")
            }
        },

        login: (state, action) => {

            const { email, password } = action.payload

            const user = state.users.find(
                user => user.email === email && user.password === password
            )

            if (user) {
                state.loggedinUser = user
                localStorage.setItem("currentUser", JSON.stringify(user))
            } else {
                alert("Invalid credentials")
            }
        },
        logout: (state) => {
            state.loggedinUser = null
            localStorage.removeItem("currentUser")
        },

    }
})
  
export const {register,login,logout} = authSlice.actions;
export default authSlice.reducer;