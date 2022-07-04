import {useState, createContext, useContext } from "react";
import { getFirestore } from '../../sevices/getFirebase'

const dataBase = getFirestore();
const usersController = dataBase.collection("Users")

const UsersContext = createContext([])

export const useUsersContext = () => useContext(UsersContext)

function UsersContextProvider({children}) {


    // Registrar usuario
    const registerUser = (user) => {
        usersController.add(user)
        .catch( err => {
            console.log(err);
        })
    }

    return(
        <UsersContextProvider.Provider value={{
            registerUser

        }}>
            {children}
        </UsersContextProvider.Provider>

    )

}