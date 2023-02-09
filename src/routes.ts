import express from 'express';
import { UsersController } from './controllers/UsersController';

const router = express.Router();
const userController = new UsersController();

router.get('/', (req, res) => {
    return res.send({message: "Você está na home"});
});

router.get('/users', async (req, res) => {
    const users = await userController.getUsers();
    res.json(users);
});

export default router;