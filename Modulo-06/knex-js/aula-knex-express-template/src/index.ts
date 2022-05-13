import connection from './connection'
import app from './app'
import express,{Response, Request} from 'express'
import { resolve } from 'path'
/*EXERCICIO 1
a) Com o raw a resposta vem com um array duplo, por isso usamos o [0][0]
b)
*/
const pegarAtor = async(nome: string): Promise<any> => {
    const [resultado] = await connection("Actor")
    .select()
    .where(`name`,'like',`${nome}`)
    return resultado;
}
app.get("/ator", async(req: Request, res: Response) => {
    console.log('entrou')
    try {
        const nome: string = req.query.nome as string
        console.log(nome)
        const resultado = await pegarAtor(nome)
        console.log(resultado)
        res.status(200).send(resultado) 
    } catch (error: any) {
      res.status(400).send(error.message)  
    }
})