import { unlink } from 'fs/promises';
import { Request, Response } from 'express';
import sharp from 'sharp';
import { Attractive } from '../models/Attractive';
import { Image } from '../models/Image';
import dotenv from 'dotenv';

dotenv.config();

export const AllAttractives = async (req: Request, res: Response) => {

    const attractives = await Attractive.findAll();

    if(attractives.length > 0) {
        attractives.map((item) => { 
            item.image = `${process.env.BASE}/attractives/${item.image}`;
        });
    }

    res.json(attractives);
}

export const NewAttractive = async (req: Request, res: Response) => {
    // console.log("FILE", req.file)
    if(req.file) {
        const fileName = `${req.file.filename}.jpg`;

        // Manipulation image with library sharp
        await sharp(req.file.path)
            .resize(1000)
            .toFormat('jpeg')
        .toFile(`./public/attractives/${fileName}`);

        const newImage = Image.build({ name: fileName });
        await newImage.save();
        
        // Delete file temporary tmp
        await unlink(req.file.path);

        res.json({newImage});
    } else {
        res.status(400);
        res.json({error: 'Envie um arquivo'});
    }
}

export const NewImages = (req: Request, res: Response) => {
    // console.log(req.files)

    res.json({});
}