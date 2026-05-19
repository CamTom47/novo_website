import dotenv from 'dotenv';
import { SquareClient, SquareEnvironment } from 'square';

dotenv.config();


export const squareClient = new SquareClient({
    environment: process.env.NODE_ENV !== 'production' ? SquareEnvironment.Sandbox : SquareEnvironment.Production,
    token: process.env.NODE_ENV !== 'production' ? process.env.SQUARE_API_KEY_DEV : process.env.SQUARE_API_KEY_PROD
})

export const SECRET_KEY = process.env.SECRET_KEY;
export const PORT = +process.env.PORT || 3001;
