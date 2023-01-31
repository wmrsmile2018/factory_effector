import  { Request, Response} from 'express';
import {HttpStatus} from '@/constants';
import * as faker from "faker";

export class SomeDataController {
    static getData(req: Request, resp: Response): void {
        if (req) {

            setTimeout(() => {
                resp.status(HttpStatus.Ok);
                resp.send({
                    text: faker.lorem.text()
                })
            }, 1000);
        }
    }
}
