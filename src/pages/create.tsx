import Header from "@/components/header";           //header  component
import FormInput from "@/components/formInput";     //componente onde esta os inputs
import { useContext, useEffect } from "react";
import { ContextJsx } from "@/context/context";
import apiController from "@/controllers/apiController";
import { useRouter } from "next/router";

export default function Create() {

  const router = useRouter()   //redireciona pagina

  const {dataForm, setDataForm} = useContext(ContextJsx)     //usando o data do useContext

useEffect(()=>{

    function RestartForm() {
      setDataForm({code: "",model: "",color: "",valor: '',status: ""});          //reiniciando state de dados ao acessar a page
    }
    RestartForm()

},[])

  async function PostData() {

    if (!dataForm.code || !dataForm.model || !dataForm.color || !dataForm.valor || !dataForm.status) {     //se algum tiver vazio, nao conclui
      return alert('preencha todos os campos!')
    }

    try {
      const res = await apiController.PostApi(dataForm.code, dataForm.model, dataForm.color, dataForm.valor, dataForm.status)   //envia dados do post
      setDataForm({code: "",model: "",color: "",valor: '',status: ""});                           //limpando dados depois de enviar
      router.push('/')                                                        //redirecionando
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className="p-10">
      <Header/>
      <h1 className="text-25px text-custom-text p-5">Registro de Motos</h1>
      <hr />
      <h1 className=" text-25px text-custom-text flex justify-center p-10">
        Preencha as informações a baixo para registrar uma Moto 🏍️
      </h1>
     <FormInput />                                         
     <div className=" flex justify-center mt-10">
     <button onClick={PostData} className=" flex items-center justify-center h-45 p-3 bg-custom-blue text-white w-419 rounded-md hover:bg-blue-800 transition-colors duration-200 gap-1 "> <ion-icon name="add-outline"></ion-icon> REGISTRAR</button>
     </div>
    </main>
  )
}
