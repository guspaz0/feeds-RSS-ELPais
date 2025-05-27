import { Request, Response, NextFunction } from "express";
import { HttpStatusCode } from '../types/httpStatusCodes'

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    //console.error(err.stack); // Log the error for debugging

    const statusCode = err.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;