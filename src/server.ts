import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { MulterError } from 'multer';
import apiRoutes from './routes/api';

dotenv.config();

const server = express();

// Cors headers config
server.use(cors());

// Static files public
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use(apiRoutes);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Endpoint não encontrado.' });
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    
    if(err instanceof MulterError) {
        res.json({error: err.code});
    } else {
        console.log(err)
        res.json({ error: 'Ocorreu um erro' })
    }
}
server.use(errorHandler);

server.listen(process.env.PORT, () => console.log(`Servidor rodando no endereço ${process.env.BASE}`));