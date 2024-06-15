import apiController from "@/controllers/apiController";
import Link from "next/link";
import { useState } from "react";
import { useContext } from "react";
import { ContextJsx } from "@/context/context";

interface IntrinsicElements {
  "ion-icon": any;
}

interface prods {          //tipando valores 
  code: string;
  model: string;
  color: string;
  valor: number;
  status: string;
}

export default function Product({ code, model, color, valor, status }: prods) {      //props tipada

  const [loading, setLoading] = useState(false)       //loading state

  const {setDeleteSucess} = useContext(ContextJsx)

  const newCode = code.replace('#', '');        //codigo sem o '#'

  const statusClasses: Record<string, string> = {
    "Em estoque": "bg-custom-bg-green text-custom-color-green", //cor verde
    "Sem estoque": "bg-custom-bg-red text-custom-color-red",   //cor vermelha
    "Em trânsito": "bg-custom-bg-yellow text-custom-color-yellow"  //cor amarelo
  };
  
  let statusClass = statusClasses[status as string];          //se status que vier da props tiver valor 'em estoque' ou outro, irá ativar uma cor.. e uso essa cor com a let statusClass
  
  async function DeleteData () {
    setLoading(true)                                 //ativa loading
    try {
      const res = await apiController.DeleteApi(newCode)   
      setDeleteSucess(res.data)                     //envia info para o context
    } catch (error) {
      console.log(error)
    }
    setLoading(false)                       //desativa loading
  }

  return (
    <main className="flex justify-between items-center bg-custom-prod p-5 px-20 my-10 rounded-lg cont-prod">
      <div className="flex gap-20 items-center w-full">
        <h1 className="text-custom-purle2 text-lg font-medium">{code}</h1>
        <div className="text-custom-text flex flex-col gap-3 w-full">
          <p className="flex gap-5 items-center text-lg flex-wrap ">
            {model} <span className={`${statusClass} p-1 rounded-xl font-medium`}>{status}</span>
          </p>
          <p className="font-medium">Valor: R$ {valor}</p>
          <p className="font-medium" >Cor: {color}</p>
        </div>
      </div>
      <div className="flex gap-3 info-prod">
       {loading ? <div className="custom-loader"></div> : <button onClick={DeleteData}> <span><ion-icon name="trash-outline"></ion-icon></span></button>}
      <Link href={{
          pathname: "/edit",      
          query: {                      //enviando parametro
            code: newCode,
          },
        }} >
      <ion-icon name="eye-outline"></ion-icon>
      </Link>
      </div>
    </main>
  );
}
