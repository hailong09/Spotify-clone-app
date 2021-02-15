import React, {useReducer,createContext, useContext } from 'react'


 export const Appcontext = createContext();

 export const AppProvider = ({initialState,reducer,children}) => {
     return (
         <Appcontext.Provider
            value= {
                useReducer(reducer,initialState)
                
            }
         >
             {children}
         </Appcontext.Provider>
     )
 }

 export const useGlobalContext = () => useContext(Appcontext);