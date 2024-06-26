import axios from "axios";

const BaseUrl = 'https://teste-motoca-systems-front-end-nine.vercel.app/api/motors/';

class ApiController {

  async GetApi() {
    try {
      return await axios.get(BaseUrl);       //faz busca
    } catch (error) {
      console.error(error);
    throw error;
    }
  }

  async GetId (code: any){

    try {
      return await axios.get(`${BaseUrl}${code}`);       //faz busca por id
    } catch (error) {
      console.error(error);
    throw error;
    }
  }

  async PostApi( code: string, model: string, color: string, valor: number, status: string ) {           //cria moto
    try {
      return await axios.post(BaseUrl, {
        code: code,
        model: model,
        color: color,
        valor: valor,
        status: status,
      });
    } catch (error) {
      console.error(error);
    throw error;
    }
  }

  async PutApi(code: string, model: string, color: string, valor: number, status: string) {         //atualiza 

    const newCode = code.replace('#', '');        //codigo sem o '#'
    
    try {
     return await axios.put(`${BaseUrl}${newCode}`,{
        code: code,
        model: model,
        color: color,
        valor: valor,
        status: status
      })
      
    } catch (error) {
      console.error(error);
    throw error;
    }
  }

  async DeleteApi(code: string) {                  //deleta
    
    try {
     return await axios.delete(`${BaseUrl}${code}`)
      
    } catch (error) {
      console.error(error);
    throw error;
    }
  }

}

const apiController = new ApiController();

export default apiController;
