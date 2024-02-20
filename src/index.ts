import express from "express";
import cors from "cors";
import router from "./api";

const port = process.env.PORT || 5000;

const app = express()
    .use(cors())
    .use('/', router);

app.listen(port, async () => {
    console.log(`App listening on port ${port}`)
});
