import { Request, Response } from 'express';
import axios from 'axios';

export async function calculateAmountToPay(req: Request, res: Response) {
  const userId = req.params.userId;
  const productIds = req.params.productIds.split(',');

  try {
    const [userResponse, productsResponse] = await Promise.all([
      axios.get(`https://mockend.com/juunegreiros/BE-test-api/users/${userId}`),
      axios.get(`https://mockend.com/juunegreiros/BE-test-api/products`)
    ]);

    const user = userResponse.data;
    const products = productsResponse.data.filter((product: { id: any; }) => productIds.includes(product.id));

    const totalAmount = products.reduce((total: any, product: { price: any; }) => total + product.price, 0);
    const amountToPay = totalAmount * (1 - (user.discount / 100));

    res.send({ "Total a pagar": amountToPay });
  } catch (error) {
    res.status(500).send({ message: "Internal Error Server" });
  }
}