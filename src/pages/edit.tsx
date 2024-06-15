import Header from "@/components/header"      //header component
import FormInput from "@/components/formInput"  //componente onde esta os inputs
import { useRouter } from "next/router";
import apiController from "@/controllers/apiController";
import { useEffect, useState, useContext } from "react";
import { ContextJsx } from "@/context/context";

interface DataType {         //tipando
  code: string;
  model: string;
  color: string;
  valor: number;
  status: string;
}

export default function Edit() {

  const {dataForm} = useContext(ContextJsx)                           //pegando dados do context

  const [data, setData] = useState<DataType[]>([])    // const para guardar dados da api

  const router = useRouter()              //rota

  const { code } = router.query                    //pegando id do parametro

  useEffect(()=>{

async function GetId () {                                      //busca o id fornecido ao entrar

  try {
    const res: any = await apiController.GetId(code)
    setData(res.data)
  } catch (error) {
    console.log(error)
  }
}

GetId()
},[code])

async function EditData() {                //atualiza dados

  try {

    const res = await apiController.PutApi(dataForm.code, dataForm.model, dataForm.color, dataForm.valor, dataForm.status)               //envia os novos dados com o id ja incluso
     router.push('/')                          //envia para rota padrao
    
  } catch (error) {
    console.log(error)
  }
}

  return (
    <main className="p-10">
      <Header />
      <h1 className="text-25px text-custom-text p-5">Editar</h1>
      <hr />
      <h1 className=" text-25px text-custom-text flex justify-center p-10 ">
      Edite as informações que preferir! 📝
      </h1>  
     {data.length > 0 && <FormInput opacity={true} disable={true} code={data[0].code} model={data[0].model} color={data[0].color} valor={data[0].valor} status={data[0].status} />}  
      <div className=" flex justify-center mt-10">
     <button onClick={EditData} className=" flex items-center justify-center h-45 p-3 bg-custom-blue text-white w-419 rounded-md hover:bg-blue-800 transition-colors duration-200 gap-1 "> <ion-icon name="arrow-up-circle-outline"></ion-icon> ATUALIZAR</button>
     </div>
    </main>
  )
}
