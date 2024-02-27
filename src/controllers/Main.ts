import { Request, Response } from 'express';
import urlService from "../UrlService";

class Controller {
    static async redirect(req: Request, res: Response) {
        const { shortURL } = req.params;

        try {
            const fullUrl = await urlService.getFullUrl(shortURL);

            if (!fullUrl) {
                res.status(404);
                res.redirect('/error_404.html');
                return;
            }

            res.redirect(fullUrl);
        } catch (e) {
            console.error(e);
            res.sendStatus(502);
        }
    }

    static async createShortUrl(req: Request, res: Response) {
        const { url } = req.params;

        try {
            const shortUrl = await urlService.createShortUrl(url);
            res.send({ shortUrl });
        } catch (e) {
            console.error(e);
            res.sendStatus(502);
        }
    }
}

export default Controller;
