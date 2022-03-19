import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial Sate

const initialState = {
  users: [
    { id: "AA", name: "Joana" },
    { id: "BB", name: "Andre" },
    { id: "CC", name: "Gab" },
  ],
};

//Create Context
export const GlobalContext = createContext(initialState);

//Prodiver Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };



  const editUser = ( user) =>{
      dispatch({
          type: 'EDIT_USER',
          payload: user
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
