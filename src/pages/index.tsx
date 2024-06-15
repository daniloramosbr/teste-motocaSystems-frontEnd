import Header from "@/components/header";
import Product from "@/components/product";    //componente onde mostra as motos
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import apiController from "@/controllers/apiController";
import { ContextJsx } from "@/context/context";

interface DataType {          //tipando dados
  code: string;
  model: string;
  color: string;
  valor: number;
  status: string;
}

export default function Home() {

  const {deleteSucess} = useContext(ContextJsx)

  const [data, setData] = useState<DataType[]>([])    

  const router = useRouter()   //redireciona pagina

  useEffect(()=>{

    async function GetMotors() { 

      try {
        const res: any = await apiController.GetApi()       //busca toddos os dados da api
       setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    GetMotors()

  },[deleteSucess])

  return (
    <main className=" p-10 w-full">
      <Header />
      <div className="flex justify-between p-8 cont-home">
        <h1 className="text-25px">Tabela de Motos</h1>
        <div className="flex w-100 gap-10 cont-home" >
        <div className="flex border rounded w-385 inputs-home"  >
        <span className="p-2 flex items-center "><ion-icon name="search-outline"></ion-icon> </span>
        <input className="w-332 bg-custom-purple" type="text" placeholder="Buscar por código, nome e cor"/>
        </div>
          <button className="flex items-center bg-custom-blue text-white rounded pr-5 pl-5 hover:bg-blue-800 transition-colors duration-200" onClick={(()=>{
            router.push('/create')
          })}> <ion-icon name="add-outline"></ion-icon> NOVO REGISTRO</button>
        </div>
      </div>
      <hr/>
    {data && data.map((data:any)=>{
      return (
      <Product key={data.code} code={data.code} model={data.model} valor={data.valor} color={data.color} status={data.status} /> )        //mostra os dados
    }
  ) 
  }
    </main>
  )
}
