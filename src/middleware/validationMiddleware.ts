import { Request, Response, NextFunction } from 'express';
import { SHORT_URL_LENGTH } from '../consts';

function validationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { shortURL } = req.params;

    if (shortURL.length === SHORT_URL_LENGTH) {
        next();
        return;
    }

    res.sendStatus(404);
};

export default validationMiddleware;
