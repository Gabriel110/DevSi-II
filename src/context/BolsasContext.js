import React,{createContext, useState, useContext, Children} from 'react';

export const BolsaContext = createContext({});

export default BolasaProvider = ({children})=>{
  return(
    <BolsaContext.Provider
      value={{
        
      }}
    >
      {children}
    </BolsaContext.Provider>
  )
}