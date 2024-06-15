import { createContext, useState } from "react";

let myVar: any;

export const ContextJsx = createContext(myVar);                //criando  context

type TitleProps = {
  children: any;
}

interface FormState {          //tipando o state
    code: string;
    model: string;
    color: string;
    valor: number;
    status: string;
  }

export const ContextProvider: any = ({ children }: TitleProps) => {

  const [dataForm, setDataForm] = useState<FormState>({       //state que guarda a info do input
    code: "",
    model: "",
    color: "",
    valor: 0,
    status: ""
  });

  const [deleteSucess, setDeleteSucess] = useState({})           //usado para atualizar a pagina ao deletar

  return (
    <ContextJsx.Provider value={{ dataForm, setDataForm, deleteSucess, setDeleteSucess }}>{children}</ContextJsx.Provider>
  );
};
