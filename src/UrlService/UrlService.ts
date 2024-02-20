import knex from "knex";
import base62 from "base62";
import { Url } from "../models/URL";
import { TIME_BEGIN } from "../consts";

class UrlService {
    private _db: knex.Knex<any, unknown[]>;
    constructor(db: knex.Knex<any, unknown[]>) {
        this._db = db;
    }

    async getFullUrl(shortURL: string): Promise<string | undefined> {
        const result = await this._db<Url>('urls')
            .first()
            .select()
            .where('shortUrl', shortURL);

        return result?.fullUrl;
    }

    async createShortUrl(url: string): Promise<string> {
        const result = await this.getShortUrl(url);

        if (result?.shortUrl) {
            return result.shortUrl;
        }

        const shortUrl = this.getUniqId();
        await this._db<Url>('urls').insert({ 'fullUrl': url, 'shortUrl': shortUrl });
        return shortUrl;
    }

    private async getShortUrl(url: string): Promise<Url | undefined> {
        const result = await this._db<Url>('urls')
            .first()
            .select()
            .where('fullUrl', url);

        return result;
    }

    private getUniqId() {
        return base62.encode(new Date().getTime() - TIME_BEGIN);
    }
}

export default UrlService;
