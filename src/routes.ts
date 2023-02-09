import { ProductsController } from './controllers/ProductsController';
import express from 'express';
import { UsersController } from './controllers/UsersController';

const router = express.Router();
const userController = new UsersController();
const productsController = new ProductsController;

router.get('/', (req, res) => {
    return res.send({message: "Você está na home"});
});

router.get('/users', async (req, res) => {
    const users = await userController.getUsers();
    res.json(users);
});

router.get('/products', async (req, res) => {
    const products = await productsController.getProducts();
    res.json(products);
});

export default router;