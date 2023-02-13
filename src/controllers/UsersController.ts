import axios from "axios";
import { Request, Response } from "express";

const API_URL: string = 'https://mockend.com/juunegreiros/BE-test-api/users';

//listar usuários
export class UsersController {
    async getUsers(): Promise<Array<any>> {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

//listar usuário pelo ID
export const getUserById = async (req: Request, res: Response) => {
    try {
        const { data } = await axios.get(`https://mockend.com/juunegreiros/BE-test-api/users/${req.params.id}`);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Erro ao listar usuários'});
    }
}

