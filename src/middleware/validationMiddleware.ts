import { Request, Response, NextFunction } from 'express';
import { SHORT_URL_LENGTH } from '../consts';

function validateShortUrlMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { shortURL } = req.params;

    if (shortURL.length !== SHORT_URL_LENGTH) {
        res.status(404);
        res.redirect('/error_404.html');
        return;
    }

    next();
};

function validateFullUrlMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const { url } = req.params;

    try {
        new URL(url);
    } catch (e) {
        console.error(e);
        res.sendStatus(400);
        return;
    }

    next();
};

export { validateShortUrlMiddleware, validateFullUrlMiddleware };
