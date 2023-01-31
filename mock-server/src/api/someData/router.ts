import express, {Router} from 'express';

import {SomeDataController} from './someDataController';

const SomeDataRouter: Router = express.Router();

SomeDataRouter.get('/', SomeDataController.getData);

export {SomeDataRouter};
