import axios from "axios";
import { Request, Response } from "express";

export const purchaseController = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const productIds = req.body.productIds;

        //Busca informações do usuário
        const userResponse = await axios.get(`https://mockend.com/juunegreiros/BE-test-api/users/${userId}`);
        const user = userResponse.data;

        //Busca informações dos produtos
        const productResponse = await axios.get(`https://mockend.com/juunegreiros/BE-test-api/products/${productIds.join(',')}`);
        const products = productResponse.data;

        //Calcula o valor total dos produtos
        const totalAmount = products.reduce((acc: any, product: { price: any; }) => acc + product.price, 0);

        //Aplica o desconto do usuário
        const amountToPay = totalAmount * (1 - (user.tax / 100));

        console.log(user);
        console.log(products);

        return res.status(200).json({ amountToPay });
    } catch (error) {
        return res.status(500).json({ message: "Internal error server" });
    }
}