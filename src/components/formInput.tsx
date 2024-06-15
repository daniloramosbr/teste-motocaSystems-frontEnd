import { ContextJsx } from "@/context/context";
import { useContext, useEffect } from "react";

interface Inputt {            //tipando valores 
  disable?: boolean;
  opacity?: boolean;
  code?: string;
  model?: string;
  color?: string;
  valor?: number;
  status?: string;
}
export default function FormInput({opacity, disable, code, model, color, valor, status}: Inputt) {     //recebe props do componets pai

  const {dataForm, setDataForm} = useContext(ContextJsx)        //dados do context

useEffect(()=>{

 function setData() {           //adiconando valores capturados do id para o form
  setDataForm({
    code: code,
    model: model,
    color: color,
    valor: valor,
    status: status
    })
 }
setData()
},[])

      const HandleChange = (event: any) => {        //funçao que pega os valores do input e manda pro seu determinado state do dataForm
        setDataForm((dataForm: any) => ({
          ...dataForm,
          [event.target.name]: event.target.value,
        }));
      };
    
    const campos = [                                 //criei uma const para usar os campos no form e nao ficar repetindo codigo tailwind e ainda deixar menor
        { nome: 'code', rotulo: 'Código', placeholder: '#', disabled: disable == true ? true : false, opacity: opacity == true && 'opacity-50', value: dataForm.code}, 
        { nome: 'model', rotulo: 'Modelo da Moto', value: dataForm.model},
        { nome: 'color', rotulo: 'Cor', value: dataForm.color},
        { nome: 'valor', rotulo: 'Valor', type: 'number', value: dataForm.valor},
        { nome: 'status', rotulo: 'Status', tipo: 'select', opcoes: ['Em estoque', 'Sem estoque', 'Em trânsito'], value: dataForm.status},
      ];
  return (
    <form onSubmit={HandleChange} className="flex items-center flex-col gap-10" >
    {
   campos.map((campo, index) => (         //usando o elemento com map
     <label key={index} className={`relative pt-2 w-419 h-50 flex cont-lab ${campo.opacity}`}>
       <span className="absolute top-0 left-3 bg-custom-purple text-xs px-1 text-custom-text font-normal">{campo.rotulo}</span>
       {campo.tipo === 'select' ? (
         <select value={campo.value} name={campo.nome} onChange={HandleChange} className="bg-custom-purple border border-custom-gray p-1 px-5 w-full text-xs rounded-md">
           <option value=''></option>
           {campo.opcoes.map((opcao, opcaoIndex) => (
             <option key={opcaoIndex} value={opcao}>{opcao}</option>
           ))}
         </select>
       ) : (
         <input  value={campo.value} type={campo.type} disabled={campo.disabled} name={campo.nome} placeholder={campo.placeholder} onChange={HandleChange} className="bg-custom-purple border border-custom-gray p-1 px-5 w-full text-xs rounded-md" />
       )}
     </label>
   ))
 }
 </form>
 
  )
}
