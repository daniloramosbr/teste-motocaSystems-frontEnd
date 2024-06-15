import type { NextApiRequest, NextApiResponse } from "next";
import { motors } from "./[id]";           //importa banco de dados fake


export default function handler(req: NextApiRequest, res: NextApiResponse) {   // Lida com a requisição sem parametros

  const {code, model, color, valor, status} = req.body
   let body = req.body

  if (req.method === 'GET') {            //requisiçao get
    try {

      res.status(200).json(motors);
      
    } catch (error) {
      return error
    }
  } 

  if (req.method === 'POST') {           //requisiçao post

    if (!code || !model || !color || !valor || !status) {                //retorna se valores forem insuficientes
      res.status(400).json({ message: 'Dados insuficientes!' });
      return;
    }

  try {
    body.code = '#' + code;

    motors.push(body)
  
    res.status(200).json({ message: 'Criado com Sucesso!' });
    
  } catch (error) {
    return error
  }
  } 
  
}
