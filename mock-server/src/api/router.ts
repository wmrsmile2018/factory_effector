import express, {Router} from 'express';
import {ApiEndpoints} from "@api/endpoints";
import {SomeDataRouter} from "@api/someData";


const apiRouter: Router = express.Router();

apiRouter.use(ApiEndpoints.example, SomeDataRouter);


export {apiRouter};
