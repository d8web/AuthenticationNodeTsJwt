import { Router } from 'express';
import multer from 'multer';

import * as ApiController from '../controllers/apiController';
import * as AttractiveController from '../controllers/attractiveController';

import { Auth } from '../midlewares/auth'

const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        cb(null, allowed.includes(file.mimetype))
    },
    limits: { fieldSize: 2000000 }
})

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/register', ApiController.register);

router.post('/login', ApiController.login);

router.get('/attractives', Auth.private, AttractiveController.AllAttractives);

router.post('/attractive', upload.single('image'), AttractiveController.NewAttractive);

router.post('/attractives/images', upload.array('images', 4), AttractiveController.NewImages);

export default router;