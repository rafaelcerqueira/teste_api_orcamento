import express from 'express';
import { ProductsController } from './controllers/ProductsController';
import { UsersController, getUserById } from './controllers/UsersController';
import { calculateAmountToPay } from './controllers/PaymentController';
//import { purchaseController } from './controllers/PurchaseController';

const router = express.Router();
const userController = new UsersController();
const productsController = new ProductsController();

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

//teste
//router.get('/users/:id', getUserById);

//router.post('/payment', purchaseController);

router.get('/users/:userId/products/:productIds', calculateAmountToPay);
  
export default router;

