import axios from "axios";

const API_URL: string = 'https://mockend.com/juunegreiros/BE-test-api/users';

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
