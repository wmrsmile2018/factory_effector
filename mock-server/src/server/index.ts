import {apiRouter} from '@api/router';
import * as bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Express, NextFunction, Request, Response} from 'express';
import morgan from 'morgan';

import {HttpStatus} from '@/constants';

// import * as path from 'path';

const PORT = 8080;
const HOST = '127.0.0.1';

const app: Express = express();

const corsOptions = {
    // credentials: true,
    origin: true,
};

app.use(cors(corsOptions));

// parse cookie
// app.use(cookieParser());

// parse application/x-www-form-urlencode
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

// api router
app.use('/', apiRouter);

// error logging middleware
// eslint-disable-next-line max-params
app.use((err: Error, _req: Request, resp: Response, _next: NextFunction) => {
    // eslint-disable-next-line no-console
    console.log(err);
    resp.status(HttpStatus.InternalError).send(err.message);
});

export const startServer = (): void => {
    app.listen(PORT, HOST, () => {
        // eslint-disable-next-line no-console
        return console.log(`Server started at http://${HOST}:${PORT}`);
    });
};
