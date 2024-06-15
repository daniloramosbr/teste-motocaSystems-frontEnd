import type { NextApiRequest, NextApiResponse } from "next";

export let motors = [                                //simulando banco de dados
  {
    "code": "#0001",
    "model": "HONDA POP 110I",
    "color": "BRANCA",
    "valor": 15000,
    "status": "Em estoque"
  },
  {
    "code": "#0002",
    "model": "HONDA 500x",
    "color": "VERMELHA",
    "valor": 50000,
    "status": "Sem estoque"
  },
  {
    "code": "#0003",
    "model": "HONDA CB 300F TWISTER",
    "color": "PRETA",
    "valor": 30000,
    "status": "Em trânsito"
  }
]


export default function handler(req: NextApiRequest, res: NextApiResponse) {        // Lida com a requisição com parametros
  
    const {id} = req.query
    const newId = '#'+id
    let body = req.body
  
    if (req.method === 'GET') {                            
    try {
      const Filter = motors.filter(function(item){                      //filtrando e retornando so o elemento com id 
        return item.code == newId
      })
        res.status(200).json(Filter)                            //enviando o elemento 
    } catch (error) {
      return error
    }
    }
    if (req.method === 'DELETE') {                 //requisiçao delete

      try {
       let newMotors = motors.filter(function(item){      //removendo 
         return item.code != newId
       })
 
       motors = newMotors                         //atualizando

       res.status(200).json(motors);
 
      } catch (error) {

       return  error;
      }
     } 

     if (req.method === 'PUT') {                         // requisição POst com parametros

      try {
       let newMotors = motors.filter(function(item){      //filtra todos menos ele
         return item.code != newId
       })
  
       let posicao = motors.findIndex(obj=> obj.code == newId)      //posicao
  
       newMotors.splice(posicao, 0, body);        //adicionando body novo na posiçao que estava
  
       motors = newMotors                         //atualizando
  
          res.status(200).json(motors)  
       
      } catch (error) {
       return  error;
      }                             
      } 
  }