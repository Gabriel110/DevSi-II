import React,{createContext, useState, useContext, Children} from 'react';

const BolsaContext = createContext({});

export const BolasaProvider = ({children})=>{

  const [nome,setNome] = useState("Gabriel Correia");
  const [curso, setCurso] = useState( );
  const [periodo, setPeriodo] = useState( );
  const [turno, setTurno] = useState( );
  const [sexo, setSexo] = useState( );
  const [idade, setIdade] = useState( );
  const [bolsa, setBolsa] = useState( false);
  const [renda, setRenda] = useState( );
  return(
    <BolsaContext.Provider
      value={{
        nome,
        setNome,
        curso,
        setCurso,
        periodo,
        setPeriodo,
        turno,
        setTurno,
        sexo,
        setSexo,
        idade,
        setIdade,
        bolsa,
        setBolsa,
        renda,
        setRenda
      }}
    >
      {children}
    </BolsaContext.Provider>
  )
}

export default BolsaContext;