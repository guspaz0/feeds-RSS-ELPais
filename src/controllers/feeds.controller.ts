import express,{ Router, Request, Response, NextFunction } from 'express'

export class feedController {
    req: Request;
    res: Response;
    constructor(req: Request, res: Response){
        this.req = req;
        this.res = res;
    }
    getHelloWorld(){
        this.res.send("Hello World!!")
    }
}